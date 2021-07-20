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
 *
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.table(tableNames.products, (table) => {
      url(table, "image_url");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(tableNames.products, (table) => {
      table.dropColumn("image_url");
  })
};
