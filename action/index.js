const inquirer = require("inquirer");
const colors = require("colors");
const pad = require("pad");
controllerGen = require("../generator/lib/ControllerGen.js");
model = require("../generator/lib/ModelGen.js");
repo = require("../generator/lib/RepositoryGen.js");
const types = ["controller", "model", "repository", "all"];
const questions = [
  {
    type: "list",
    name: "gentype",
    message: "what do you want?",
    choices: types
  },
  {
    type: "input",
    name: "name",
    message: "give the name :"
  }
];

module.exports = function() {
  inquirer.prompt(questions).then(function(answers) {
    switch (answers.gentype) {
      case "controller":
        genController = new controllerGen(answers.name);
        break;
      case "model":
        genModel = new model(answers.name);
        break;
      case "repository":
        genRepo = new repo(answers.name);
        break;
      case "all":
        genController = new controllerGen(answers.name);
        genModel = new model(answers.name);
        genRepo = new repo(answers.name);
        break;
      default:
        console.log("piss off");
        break;
    }
  });
};
