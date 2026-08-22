const path = require('path');
const fs = require('fs-extra');

module.exports = {
  addFlyDeployment(blueprint) {
    const appName = blueprint.name;

    // 1. Dockerfile
    blueprint.files.push({
      path: `${appName}/Dockerfile`,
      content: `FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]`
    });

    // 2. fly.toml
    blueprint.files.push({
      path: `${appName}/fly.toml`,
      content: `app = "${appName}"

primary_region = "sjc"

[build]
  dockerfile = "Dockerfile"

[env]
  PORT = "3000"

[[mounts]]
  source = "app_data"
  destination = "/app/data"

[http_service]
  internal_port = 3000
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true`
    });

    // 3. Deployment helper. Credentials remain in the caller's environment.
    blueprint.files.push({
      path: `${appName}/deploy-fly.sh`,
      content: `#!/usr/bin/env sh
set -eu

: "\${FLY_API_TOKEN:?Set FLY_API_TOKEN before deploying}"

if [ -n "\${APP_SECRET_KEY:-}" ]; then
  fly secrets set APP_SECRET_KEY="$APP_SECRET_KEY" --app "${appName}"
fi

fly deploy --app "${appName}"`
    });

    // 4. Production server.js
    blueprint.files.push({
      path: `${appName}/server.js`,
      content: `const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', app: '${appName}' });
});

app.listen(PORT, () => {
  console.log('App running on port ' + PORT);
});`
    });

    // 5. Production package.json
    blueprint.files.push({
      path: `${appName}/package.json`,
      content: JSON.stringify(
        {
          name: appName,
          version: "1.0.0",
          main: "server.js",
          scripts: {
            start: "node server.js"
          },
          dependencies: {
            express: "^4.19.0"
          }
        },
        null,
        2
      )
    });

    return blueprint;
  }
};
