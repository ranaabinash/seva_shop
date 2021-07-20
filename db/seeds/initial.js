const tableNames = require("../sources/constants/tableNames");
const Knex = require("knex");

/**
 * @param {Knex} knex
 */

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(tableNames.stocks).del();
  await knex(tableNames.products).del();
  await knex(tableNames.user).del();
  await knex(tableNames.brand).del();
  await knex(tableNames.category).del();
  await knex(tableNames.status).del();
  await knex(tableNames.store).del();
  // Inserts seed entries
  const user = {
    email: "magarabinash986@gmail.com",
    username: "magarabinash",
    firstname: "Abinash",
    lastname: "Rana",
    password: "abinash",
  };
  await knex(tableNames.user).insert(user);

  const [brand_id] = await knex(tableNames.brand).insert(
    { brand: "Louis Vuitton" },
    "id"
  );

  const [category_id] = await knex(tableNames.category).insert(
    { category: "wareables" },
    "id"
  );

  const [product_id] = await knex(tableNames.products).insert(
    {
      product_name: "Smart Watch",
      category_id,
      brand_id,
      price: 10000.0,
      image_url:
        "https://media.gqindia.com/wp-content/uploads/2017/07/Louis-Vuitton_watch-top-image-866x487.jpg",
    },
    "id"
  );

  await knex(tableNames.status).insert([
    { type: "order confirmed" },
    { type: "pending" },
    { type: "delivered" },
    { type: "shipped" },
  ]);

  const [store_id] = await knex(tableNames.store).insert(
    {
      store_name: "Seva Store",
      email: "seva@sevadev.com",
      phone_number: "01-1231247",
      city: "Patan",
      district: "Lalitpur",
      state: "Province 3",
    },
    "id"
  );

  await knex(tableNames.stocks).insert({
    product_id,
    store_id,
    quantity: 7,
  });
};
