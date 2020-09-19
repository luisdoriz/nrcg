const getContainerCode = (componentName) => (`
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ${componentName} from './${componentName}View';

const initialState = {};

class ${componentName}Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = initialState;
  }
  
  render() {
    return (
      <${componentName} />
    )
  }
}

${componentName}Container.propTypes = {};

export default ${componentName}Container;

`);

module.exports = getContainerCode;
