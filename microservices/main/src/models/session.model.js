const { Model } = require('objection');

class Session extends Model {
  static get tableName() {
    return 'training_sessions';
  }
}

module.exports = Session;
