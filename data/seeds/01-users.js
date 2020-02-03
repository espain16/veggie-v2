
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: 'adminpass'},
        {username: 'espain', password: 'password1'},
        {username: 'csandhu', password: 'shadowpass'}
      ]);
    });
};
