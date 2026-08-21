module.exports = {
  addAuth(blueprint) {
    blueprint.files.push({
      path: `${blueprint.name}/server/routes/auth.js`,
      content: `// Auth routes (login, register, logout) for ${blueprint.name}`
    });
    blueprint.files.push({
      path: `${blueprint.name}/server/controllers/authController.js`,
      content: `// Auth controller logic for ${blueprint.name}`
    });
    blueprint.files.push({
      path: `${blueprint.name}/server/models/User.js`,
      content: `// User model for ${blueprint.name}`
    });
  }
};
