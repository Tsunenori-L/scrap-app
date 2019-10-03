require('dotenv').config();
const { Sequelize } = require('sequelize');

const db = new Sequelize(
  process.env.HEROKU_POSTGRESQL_AMBER_URL ||
    'postgres://localhost:5432/keepsake',
  {
    logging: false,
  }
);

// On CLI, enter : createdb keepsake

module.exports = db;
