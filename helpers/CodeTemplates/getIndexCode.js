const getIndexCode = (componentName, options) => {
  const {
    view,
    redux,
  } = options;
  return (`
  import ContainerView from ${view ? `'./${componentName}View'`: `'./${componentName}Container'`};
  ${redux ? `import Container from './${componentName}Redux';`: ''}

  export default ${redux ? 'Container(ContainerView)' : 'ContainerView'};
`);
}
module.exports = getIndexCode;