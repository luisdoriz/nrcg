const getIndexCode = (componentName) => (`
import ContainerView from './${componentName}Container';
import Container from './${componentName}Redux';

export default Container(ContainerView);

`);

module.exports = getIndexCode;