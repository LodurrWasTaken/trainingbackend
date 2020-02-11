const { Model } = require('objection');

class Plan extends Model {
  static get tableName() {
    return 'training_plans';
  }
}

module.exports = Plan;
