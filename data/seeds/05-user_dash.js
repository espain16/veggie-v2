
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_dash').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_dash').insert([
        {user_id:1},
        {user_id:2},
        {user_id:3}
      ]);
    });
};
