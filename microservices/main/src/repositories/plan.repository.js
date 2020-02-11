const Plan = require('../models/Plan.model');

class PlanRepository extends Plan {
  static findOne(id) {
    return this.query().findById(id);
  }

  static insertOne() {
    return this.query().insertAndFetch({});
  }

  static deleteById(id) {
    return this.query().deleteById(id);
  }
}

module.exports = PlanRepository;
