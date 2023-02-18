/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const products = require("../fixtures/products");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
  await knex('products').insert(products);
};
