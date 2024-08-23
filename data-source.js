// data-source.js
const { DataSource } = require("typeorm");
const Task = require("./models/task");
const User = require("./models/user");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  synchronize: true,
  logging: false,
  entities: [Task, User],
});

module.exports = { AppDataSource };
