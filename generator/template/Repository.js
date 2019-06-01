const debug = require("debug")("app:db");

const CrudRepository = require("gemboot").CrudRepository;
const {{name}} = require("@models/{{name}}");

class {{name}}Repository extends CrudRepository {
    constructor() {
        super();
        this.model = new {{name}}();
    }

}

module.exports = {{name}}Repository;
