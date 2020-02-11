const Knex = require('knex');
const { Model } = require('objection');

const connection = Knex(require('./knexfile'));

Model.knex(connection);
