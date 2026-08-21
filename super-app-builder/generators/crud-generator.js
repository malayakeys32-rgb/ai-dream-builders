module.exports = {
  addCRUD(blueprint, modelName) {
    blueprint.files.push({
      path: `${blueprint.name}/server/routes/${modelName}.js`,
      content: `// CRUD routes for ${modelName}`
    });
  }
};
