const db = require("../database/dbConfig");

module.exports = {
  find_restaurant,
  findById_restaurant,
  insert_restaurant,
  update_restaurant,
  remove_restaurant
};

//restaurant

async function find_restaurant() {
  return await db("restaurant");
}

async function findById_restaurant(id) {
  return await db("restaurant")
    .where({ id: Number(id) })
    .first();
}

async function insert_restaurant(user) {
  return await db("restaurant")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

async function update_restaurant(id, user) {
  return await db("restaurant")
    .where("id", Number(id))
    .update(user);
}

async function remove_restaurant(id) {
  return await db("restaurant")
    .where("id", Number(id))
    .del();
}

