const tableName = 'training_sessions';

exports.seed = function(knex) {
  return knex(tableName)
    .del()
    .then(() => {
      return knex(tableName).insert([
        { title: 'testTitle1', description: 'testDescription1' },
        { title: 'testTitle2', description: 'testDescription2' },
        { title: 'testTitle3', description: 'testDescription3' },
        { title: 'testTitle4', description: 'testDescription4' },
        { title: 'testTitle5', description: 'testDescription5' }
      ]);
    });
};
