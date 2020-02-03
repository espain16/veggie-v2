
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food_truck').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food_truck').insert([
        {name: 'RawASF', type: 'Vegan'},
        {name: 'Vegan Veganos', type: 'Vegan'},
        {name: 'helping Food Truck', type: 'Vegan'}
      ]);
    });
};
