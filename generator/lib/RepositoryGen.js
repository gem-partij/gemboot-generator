var fs = require("fs-extra");
const h = require("handlebars");
var path = require("path");
class RepositoryGen {
	constructor(name) {
		this.template = "../template/Repository.js";
		this.output = process.cwd() + "/app/repositories";
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
				name: this.name
			});
			let write = await fs.outputFile(
				`${this.output}/${this.name}Repository.js`,
				content
			);
			console.log(
				`add Repository ${this.name}Repository.js successfully`
			);
		} catch (err) {
			console.log(err);
		}
	}
}
module.exports = RepositoryGen;
