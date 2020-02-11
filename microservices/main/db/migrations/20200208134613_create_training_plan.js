const tableName = 'training_plans';

exports.up = function(knex) {
  return knex.schema.createTable(tableName, t => {
    t.increments();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tableName);
};
