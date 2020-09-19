#!/usr/bin/env node

const yargs = require("yargs");

const formatComponentName = require("../helpers/formatComponentName");
const { createComponentFolder } = require("../modules/fs");

const options = yargs
  .usage("Usage: -n <name>")
  .option("n", { alias: "name", describe: "Component name", type: "string", demandOption: true })
  .argv;

let { name } = options;

const componentName = formatComponentName(name);

createComponentFolder(componentName);
