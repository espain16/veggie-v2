
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: '', password: ''},
        {username: '', password: ''},
        {username: '', password: ''}
      ]);
    });
};
