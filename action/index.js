const inquirer = require("inquirer");
const path = require("path");
generator = require("../generator");
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
    /**
     * custom list
     * name @string
     * template process.cwd() + @string
     * message @string
     */
    const contollerOptions = { name: answers.name };
    const modelOptions = {
      name: answers.name,
      template: path.join(__dirname, "../generator/template/Model.js"),
      output: process.cwd() + "/app/models",
      message: `add Controller ${answers.name}.js successfully`
    };
    const repositoryOptions = {
      name: answers.name,
      template: path.join(__dirname, "../generator/template/Repository.js"),
      output: process.cwd() + "/app/repositories",
      message: `add Repository ${answers.name}.js successfully`
    };
    switch (answers.gentype) {
      case "controller":
        genController = new generator(contollerOptions);
        break;
      case "model":
        genModel = new generator(modelOptions);
        break;
      case "repository":
        genRepo = new generator(repositoryOptions);
        break;
      case "all":
        genController = new generator(contollerOptions);
        genModel = new generator(modelOptions);
        genRepo = new generator(repositoryOptions);
        break;
      default:
        console.log("piss off");
        break;
    }
  });
};
