module.exports = {
  addScreen(blueprint, screenName) {
    blueprint.files.push({
      path: `${blueprint.name}/client/src/pages/${screenName}.jsx`,
      content: `export default function ${screenName}() {\n  return <div>${screenName} screen</div>;\n}`
    });
  }
};
