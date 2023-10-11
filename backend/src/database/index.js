import Sequelize from "sequelize";

import config from "../config/database";
import Customer from "../app/models/Customer";

const models = [Customer]

class Database {
  constructor() {
    this.connection = new Sequelize(config);

    this.init();
  }

  init() {
    models.forEach(models = models.init(this.connection));
  }
}

export default Database;
