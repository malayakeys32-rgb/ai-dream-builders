const fs = require('fs-extra');
const path = require('path');

function writeProjectToDisk(blueprint) {
  const root = path.join(__dirname, '..', 'generated-apps', blueprint.name);

  fs.ensureDirSync(root);

  blueprint.folders.forEach(folder => {
    fs.ensureDirSync(path.join(root, folder));
  });

  blueprint.files.forEach(file => {
    fs.outputFileSync(path.join(root, file.path), file.content);
  });

  return {
    message: 'Project created',
    path: root
  };
}

module.exports = { writeProjectToDisk };
