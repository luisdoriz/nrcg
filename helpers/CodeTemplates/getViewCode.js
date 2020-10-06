const getViewCode = (componentName, options) => {
  const {
    css,
    sass,
  } = options;
  return (`
  import React from 'react';
  import PropTypes from 'prop-types';
  
  ${css ? "import './styles.css'" : ''}
  ${sass ? "import './styles.scss'" : ''}

  const ${componentName}View = ({}) => {
    return (
      <div${css || sass ? ` className="${componentName}-container" ` : ''}>
        ${componentName} View!
      </div>
    );
  }

  ${componentName}View.propTypes = {

  };

  export default ${componentName}View;

`);
}

module.exports = getViewCode;
