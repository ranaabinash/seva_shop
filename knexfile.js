// Update with your config settings.

const { DBError } = require("objection");

require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "db",
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  }

};
