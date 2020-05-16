const Sequelize = require('sequelize');

const tonFuncionarios = require('../app/models/tonFuncionarios');
const testFuncionarios = require('../app/models/testFuncionarios');
const databaseConfig = require('../config/database');
const mongoose = require('mongoose');

const models = [tonFuncionarios, testFuncionarios];

class Database {
  constructor() {
    this.startPostgres();
    this.startMongo();
  }

  startPostgres() {
    this.connection = new Sequelize(databaseConfig);
    models.map(
      model => model.init(this.connection),
      console.log(`-> database postgres up on port 5432`),
    );
  }

  startMongo() {
    this.mongoConnection = mongoose.connect(
      databaseConfig.mongo.path,
      databaseConfig.mongo.options,
    );
    console.log(`-> database mongo up on port 27017`);
  }
}
module.exports = new Database();
