const { exec } = require('child_process');

function runProject(path) {
  exec(`node ${path}/server/index.js`);
}

module.exports = { runProject };
