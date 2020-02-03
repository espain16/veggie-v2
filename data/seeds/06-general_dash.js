
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('general_dash').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('general_dash').insert([
        {rest_id: 2, ft_id:1},
        {rest_id: 4, ft_id:2},
        {rest_id: 5, ft_id:3}
      ]);
    });
};
