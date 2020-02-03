
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rating').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rating').insert([
        {rating: 2, comments:'Lacked flavor, do You guys know what salt is ?', ft_id: 1, user_id: 1,rest_id: 1},
        {rating: 4, comments:'Best Vegan food I have eaten by far ', ft_id: 2, user_id: 1,rest_id: 4},
        {rating: 5, comments:'Whoa! Amazing just amazing', ft_id: 4, user_id: 3,rest_id: 7}
      ]);
    });
};
