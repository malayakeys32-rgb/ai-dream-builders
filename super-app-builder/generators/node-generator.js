module.exports = {
  addNodeRoute(blueprint, routeName) {
    blueprint.files.push({
      path: `${blueprint.name}/server/routes/${routeName}.js`,
      content: `// Node/Express route for ${routeName}`
    });
  }
};
