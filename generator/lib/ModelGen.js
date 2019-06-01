var fs = require("fs-extra");
const h = require("handlebars");
var path = require("path");
class ModelGen {
  constructor(name) {
    this.template = "../template/Model.js";
    this.output = process.cwd() + "/app/models";
    this._name = name;
    this.generate();
  }
  get name() {
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }

  set name(newName) {
    this._name = newName;
  }
  async generate() {
    try {
      let read = await fs.readFile(path.join(__dirname, this.template));
      let template = h.compile(read.toString());
      let content = template({
        name: this._name
      });
      let write = await fs.outputFile(
        `${this.output}/${this._name}.js`,
        content
      );
      console.log(`add Model ${this.name}.js successfully`);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = ModelGen;
