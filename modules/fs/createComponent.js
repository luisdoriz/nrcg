const fs = require('fs');

const {
  getContainerCode,
  getReduxCode,
  getViewCode,
  getIndexCode,
} = require('../../helpers/CodeTemplates');

const createComponentFolder = async (componentName) => {
  const dir = `./${componentName}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.appendFile(`./${dir}/${componentName}Container.js`, getContainerCode(componentName), (err) => {
    if (err) throw err;
  });
  fs.appendFile(`./${dir}/${componentName}Redux.js`, getReduxCode(), (err) => {
    if (err) throw err;
  });
  fs.appendFile(`./${dir}/${componentName}View.jsx`, getViewCode(componentName), (err) => {
    if (err) throw err;
  });
  fs.appendFile(`./${dir}/index.js`, getIndexCode(componentName), (err) => {
    if (err) throw err;
  });
}

module.exports = createComponentFolder;
