const CrudController = require("gemboot").CrudController;
const {{ name }}Repository = require("@repositories/{{name}}Repository");

class {{ name}}Controller extends CrudController {
  constructor() {
    super();
        this.repo = new {{ name }}Repository();
  }
}

module.exports = {{ name }}Controller;
