
exports.up = function(knex,) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments('id').primary();
    tbl.string('username', 128).unique().notNullable()
    tbl.string('password', 40).unique().notNullable()
  })

  .createTable('user_dash', tbl => {
    tbl.increments('id').primary();
    tbl.foreign('user_id').references('users.id')
  })

  .createTable('general_dash', tbl => {
    tbl.increments('id').primary();
    tbl.foreign('ft_id').references('food_truck.id')
    tbl.foreign('rest_id').references('restaurant.id')

  })

  .createTable('restaurant', tbl => {
    tbl.increments('id').primary();
    tbl.string('name', 255).notNullable()
    tbl.string('city', 255).notNullable()
    tbl.string('type', 255).notNullable()
    
  })

  .createTable('food_truck', tbl => {
    tbl.increments('id').primary();
    tbl.string('name', 255).notNullable()
    tbl.string('type', 255).notNullable()
  })

  .createTable('rating', tbl => {
    tbl.increments('id').primary();
    tbl.integer('rating')
    tbl.string('comment')
    tbl.foreign('user_id').references('rating.id')
    tbl.foreign('ft_id').references('food_truck.id')
    tbl.foreign('rest_id').references('restaurant.id')

  })
  

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('rating')
  .dropTableIfExists('restaurant')
  .dropTableIfExists('food_truck')
  .dropTableIfExists('user_dash')
  .dropTableIfExists('general_dash')
};
