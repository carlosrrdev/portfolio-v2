const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5432,
  }
);

module.exports = sequelize;
