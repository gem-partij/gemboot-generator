var fs = require("fs-extra");
const h = require("handlebars");
var path = require("path");
class generator {
  constructor(options) {
    this.template =
      options.template ||
      path.join(__dirname, "../generator/template/Controller.js");
    this.output = options.output || process.cwd() + "/app/controllers";
    this._name = options.name || "example";
    this.message =
      options.message ||
      `add Controller ${this.name}Controller.js successfully`;
    this.errorMessage = options.errorMessage;
    this.generate();
  }
  get name() {
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }
  set name(newName) {
    this._name = newName;
  }
  successMessage(message) {
    console.log(message);
  }
  async generate() {
    try {
      let read = await fs.readFile(this.template);
      let template = h.compile(read.toString());
      let content = template({
        name: this.name
      });
      let write = await fs.outputFile(
        `${this.output}/${this.name}Controller.js`,
        content
      );
      this.successMessage(this.message);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = generator;
