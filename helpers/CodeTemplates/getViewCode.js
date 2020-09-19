const getViewCode = (componentName) => (`
import React from 'react';
import PropTypes from 'prop-types';

const ${componentName}View = ({}) => {
  return (
    <div>
      ${componentName} View!
    </div>
  );
}

${componentName}View.propTypes = {

};

export default ${componentName}View;

`);

module.exports = getViewCode;
