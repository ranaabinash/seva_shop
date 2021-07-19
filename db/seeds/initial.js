const tableNames = require("../sources/constants/tableNames");
const knex = require("knex");

/**
 * @param {Knex} knex
 */

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(tableNames.user).del()
  // Inserts seed entries
  const user = {
    email: "magarabinash986@gmail.com",
    username: "magarabinash",
    firstname: "Abinash",
    lastname: "Rana",
    password: "abinash"
  }
  await knex(tableNames.user).insert(user);
};