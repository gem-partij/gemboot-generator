#!/usr/bin/env node

program = require("../packages").program;
colors = require("../packages").colors;
controllerGen = require("../generator/lib/ControllerGen.js");
model = require("../generator/lib/ModelGen.js");
repo = require("../generator/lib/RepositoryGen.js");
action = require("../action");
program
  .command("add")
  .alias("ls")
  .description("")
  .action(function(name) {
    action();
  });

program
  .command("add:controller <name>")
  .alias("ac")
  .description("generate controller file into app/controller")
  .action(function(name) {
    genController = new controllerGen(name);
  });
program
  .command("add:model <name>")
  .alias("am")
  .description("generate model file into app/model folder")
  .action(function(name) {
    genModel = new model(name);
  });

program
  .command("add:repository <name>")
  .alias("repo")
  .description("generate model file into app/repositories folder")
  .action(function(name) {
    genRepo = new repo(name);
  });
program.parse(process.argv);
