module.exports = {
  addDatabase(blueprint) {
    blueprint.files.push({
      path: `${blueprint.name}/server/models/db.js`,
      content: `// Database connection setup (PostgreSQL) for ${blueprint.name}`
    });
  }
};
