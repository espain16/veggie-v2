const db = require("../database/dbConfig");

module.exports = {
  find_foodtruck,
  findById_foodtruck,
  insert_foodtruck,
  update_foodtruck,
  remove_foodtruck
};

//foodtruck

async function find_foodtruck() {
  return await db("foodtruck");
}

async function findById_foodtruck(id) {
  return await db("foodtruck")
    .where({ id: Number(id) })
    .first();
}

async function insert_foodtruck(user) {
  return await db("foodtruck")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

async function update_foodtruck(id, user) {
  return await db("foodtruck")
    .where("id", Number(id))
    .update(user);
}

async function remove_foodtruck(id) {
  return await db("foodtruck")
    .where("id", Number(id))
    .del();
}

async function findBydetail() {
  return await db("fulltable")
    .innerJoin("menu_item", "fulltable.menu_id", "menu_item.user_id")
    .select("*");
}

function getAllEntries(id) {
  const entries = db("entries")
    .join("children", "entries.children_id", "children.id")
    .join("foods", "entries.food_id", "foods.id")
    .select("*")
    .where("children.id", id);
  return entries;
}
