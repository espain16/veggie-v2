const db = require("../database/dbConfig");

module.exports = {

  getAllgeneraldashboard,
  getAllgeneraldashboardByid
};


function getAllgeneraldashboardByid(id) {
  const rate = db("generaldashboard")
    .join("foodtruck", "generaldashboard.ft_id", "foodtruck.id")
    .join("restaurant", "generaldashboard.restaurant_id", "restaurant.id")
    .select("*")
    .where("foodtruck.id", id);
  return generaldashboard;
}

function getAllgeneraldashboard() {
  const generaldashboard = db("generaldashboard")
    .join("foodtruck", "generaldashboard.ft_id", "foodtruck.id")
    .join("restaurant", "generaldashboard.restaurant_id", "restaurant.id")
    .select("*");

  return generaldashboard;
}
