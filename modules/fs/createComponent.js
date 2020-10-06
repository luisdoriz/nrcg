const fs = require('fs');

const {
  getContainerCode,
  getReduxCode,
  getViewCode,
  getIndexCode,
  getCssCode,
} = require('../../helpers/CodeTemplates');

const createComponentFolder = async (componentName, options) => {
  const {
    redux,
    view,
    css,
    sass,
  } = options;
  const dir = `./${componentName}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  if(css || sass) {
    fs.appendFile(`./${dir}/styles.${css ? 'css' : 'scss'}`, getCssCode(componentName), (err) => {
      if (err) throw err;
    });
  }
  if (!view) {
    fs.appendFile(`./${dir}/${componentName}Container.js`, getContainerCode(componentName), (err) => {
      if (err) throw err;
    });
  }
  if (redux) {
    fs.appendFile(`./${dir}/${componentName}Redux.js`, getReduxCode(), (err) => {
      if (err) throw err;
    });
  }
  fs.appendFile(`./${dir}/${componentName}View.jsx`, getViewCode(componentName, {
    css,
    sass,
  }), (err) => {
    if (err) throw err;
  });
  fs.appendFile(`./${dir}/index.js`, getIndexCode(componentName, {
    view,
    redux,
  }), (err) => {
    if (err) throw err;
  });
}

module.exports = createComponentFolder;
