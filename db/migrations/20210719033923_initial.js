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

  await knex.schema.createTable(tableNames.brand, (table) => {
    table.increments();
    table.string("brand", 50).notNullable();
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.category, (table) => {
    table.increments();
    table.string("category", 50).notNullable();
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.store, (table) => {
    table.increments();
    table.string("store_name", 50).notNullable();
    email(table, "email");
    table.string("phone_number", 10);
    table.string("tole", 50);
    table.string("city", 50);
    table.string("district", 50);
    table.string("state", 50);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.products, (table) => {
    table.increments();
    table.string("product_name", 50).notNullable();
    refrences(table, tableNames.category);
    refrences(table, tableNames.brand);
    table.double("price");
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.stocks, (table) => {
    table.increments();
    refrences(table, tableNames.products);
    refrences(table, tableNames.store);
    table.integer("quantity");
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.status, (table) => {
    table.increments();
    table.string("type", 15);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.order, (table) => {
    table.increments();
    refrences(table, tableNames.user);
    refrences(table, tableNames.status);
    table.date("ordered_date");
    table.date("shipped_date");
    refrences(table, tableNames.store);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.orderDetails, (table) => {
    table.increments();
    refrences(table, tableNames.products);
    refrences(table, tableNames.order);
    table.integer("quantity");
    table.integer("discount");
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.orderDetails,
      tableNames.order,
      tableNames.status,
      tableNames.stocks,
      tableNames.products,
      tableNames.store,
      tableNames.brand,
      tableNames.category,
      tableNames.user,
    ].map((tablename) => knex.schema.dropTable(tablename))
  );
};
