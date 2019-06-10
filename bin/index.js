#!/usr/bin/env node
var path = require("path");
program = require("../packages").program;
colors = require("../packages").colors;
generator = require("../generator");
action = require("../action");
program
  .command("add")
  .description("")
  .action(function(name) {
    action();
  });

program
  .command("add:controller <name>")
  .alias("ac")
  .description("generate controller file into app/controller")
  .action(function(name) {
    genController = new generator({
      name: name
    });
  });
program
  .command("add:model <name>")
  .alias("am")
  .description("generate model file into app/model folder")
  .option("-s, --small [value]", "small pizza size")
  .action(function(name, args) {
    console.log(name);
    console.log(args.small);
  });

program
  .command("add:repository <name>")
  .alias("repo")
  .description("generate model file into app/repositories folder")
  .action(function(name) {
    genRepo = new repo(name);
  });

program.parse(process.argv);
