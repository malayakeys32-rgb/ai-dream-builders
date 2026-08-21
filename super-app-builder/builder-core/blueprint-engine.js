function generateBlueprint(idea, type) {
  const name = idea.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    name,
    idea,
    type,
    stack: {
      frontend: 'React',
      backend: 'Node + Express',
      database: 'PostgreSQL'
    },
    folders: [
      `${name}/client/src/components`,
      `${name}/client/src/pages`,
      `${name}/server/routes`,
      `${name}/server/controllers`,
      `${name}/server/models`
    ],
    files: [
      {
        path: `${name}/server/index.js`,
        content: `const express = require('express'); const app = express(); app.listen(4000);`
      },
      {
        path: `${name}/client/src/App.jsx`,
        content: `export default function App(){ return <h1>${idea}</h1>; }`
      }
    ]
  };
}

module.exports = { generateBlueprint };
