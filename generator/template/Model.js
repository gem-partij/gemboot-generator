const Sequelize = require("sequelize");
const Model = require("gemboot").Model;

class {{name}} extends Model {
    constructor() {
        super();

        this.table = "{{name}}"
    }
}

module.exports = {{name}};
