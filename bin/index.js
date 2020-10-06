#!/usr/bin/env node

const yargs = require("yargs");

const formatComponentName = require("../helpers/formatComponentName");
const { createComponentFolder } = require("../modules/fs");

const options = yargs
  .usage("Usage: -n <name>")
  .option("n", { alias: "name", describe: "Component name", type: "string", demandOption: true })
  .option("r", { alias: "redux", describe: "Redux", type: "boolean", demandOption: false })
  .default('r', false)
  .option("v", { alias: "view", describe: "React Arrow function", type: "boolean", demandOption: false })
  .default('v', false)
  .option("c", { alias: "css", describe: "Css", type: "boolean", demandOption: false })
  .default('c', false)
  .option("s", { alias: "sass", describe: "Node sass", type: "boolean", demandOption: false })
  .default('s', false)
  .argv;

let { name, redux, view, css, sass } = options;


const componentName = formatComponentName(name);

createComponentFolder(componentName, {
  redux,
  view,
  css,
  sass,
});
