const db = require("../database/dbConfig");

module.exports = {
  find_rate,
  findById_rate,
  insert_rate,
  update_rate,
  remove_rate,
  getAllrate,
  getAllrateByid
};

//rate

async function find_rate() {
  return await db("rate");
}

async function findById_rate(id) {
  return await db("rate")
    .where({ id: Number(id) })
    .first();
}

async function insert_rate(user) {
  return await db("rate")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

async function update_rate(id, user) {
  return await db("rate")
    .where("id", Number(id))
    .update(user);
}

async function remove_rate(id) {
  return await db("rate")
    .where("id", Number(id))
    .del();
}

function getAllrateByid(id) {
  const rate = db("rate")
    .join("foodtruck", "rate.ft_id", "foodtruck.id")
    .join("restaurant", "rate.restaurant_id", "restaurant.id")
    .select("*")
    .where("foodtruck.id", id);
  return rate;
}

function getAllrate() {
  const rate = db("rate")
    .join("foodtruck", "rate.ft_id", "foodtruck.id")
    .join("restaurant", "rate.restaurant_id", "restaurant.id")
    .select("*");

  return rate;
}
