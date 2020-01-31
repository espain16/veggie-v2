
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments();
    tbl
    .string('username', 128)
    .unique()
    .notNullable()
    tbl
    .string('password', 40)
    .unique()
    .notNullable()
  })

  .createTable('user_dash', tbl => {
    tbl.increments();
    tbl
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })

  .createTable('general_dash', tbl => {
    tbl.increments();
    tbl
    .integer('ft_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('food_truck')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl
    .integer('rest_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('restaurant')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  })

  .createTable('restaurant', tbl => {
    tbl.increments();
    tbl
    .string('name')
    .string('city')
    .string('type')
    
  })

  .createTable('food_truck', tbl => {
    tbl.increments();
    tbl
    .string('name')
    .string('type')
  })

  .createTable('rating', tbl => {
    tbl.increments();
    tbl
    .integer('rating')
    .string('comment')
    tbl
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl
    .integer('ft_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('food_truck')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl
    .integer('rest_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('restaurant')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

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
