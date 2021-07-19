const tableNames = require("../sources/constants/tableNames");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.user)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.user).insert([
        {
          email: "magarabinash986@gmail.com",
          username: "magarabinash",
          firstname: "Abinash",
          lastname: "Rana",
          password: "abinash",
        },
      ]);
    });
};
