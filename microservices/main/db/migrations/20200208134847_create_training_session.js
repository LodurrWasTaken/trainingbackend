const tableName = 'training_sessions';

exports.up = function(knex) {
  return knex.schema.createTable(tableName, t => {
    t.increments();
    t.string('title').notNullable();
    t.string('description').notNullable();
    t.boolean('completed')
      .notNullable()
      .defaultTo(false);
    t.integer('order');
    t.integer('plan_id')
      .references('id')
      .inTable('training_plans');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tableName);
};
