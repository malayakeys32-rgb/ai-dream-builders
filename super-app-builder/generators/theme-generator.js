module.exports = {
  addTheme(blueprint, themeName = 'default') {
    blueprint.files.push({
      path: `${blueprint.name}/client/src/theme-${themeName}.css`,
      content: `/* ${themeName} theme styles for ${blueprint.name} */`
    });
  }
};
