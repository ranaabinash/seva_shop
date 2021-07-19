const Knex = require("knex");
const tableNames = require("../sources/constants/tableNames");
const {
  addDefaultColumns,
  createNameTable,
  url,
  email,
  refrences,
} = require("../sources/constants/table.utils");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments();
    email(table, "email");
    table.string("username", 50).notNullable();
    table.string("firstname", 50).notNullable();
    table.string("lastname", 50).notNullable();
    table.string("password", 50).notNullable();
    table.date("last_loggedin");
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("user");
};