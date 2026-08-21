module.exports = {
  addReactComponent(blueprint, componentName) {
    blueprint.files.push({
      path: `${blueprint.name}/client/src/components/${componentName}.jsx`,
      content: `export default function ${componentName}() {\n  return <div>${componentName} component</div>;\n}`
    });
  }
};
