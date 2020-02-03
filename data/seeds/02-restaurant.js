
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurant').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {name:'Sliver', city: 'Berkeley', type: 'Vegetarian'},
        {name:"Butcher's Son", city: 'Berkeley', type: 'Vegan'},
        {name:'HeyO!', city: 'Mountain View', type: 'Vegan'}
      ]);
    });
};

//truncate is used instead of del(). to help restart our table id to 1. 