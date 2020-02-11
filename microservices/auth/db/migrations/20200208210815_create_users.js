const tableName = 'users';

exports.up = function(knex) {
  return knex.schema.createTable(tableName, t => {
    t.increments();
    t.string('email').notNullable();
    t.string('hashed_password').notNullable();
    t.integer('plan_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tableName);
};
