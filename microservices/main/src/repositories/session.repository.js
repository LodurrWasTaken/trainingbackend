const Session = require('../models/session.model');

class SessionRepository extends Session {
  static getAll() {
    return this.query().where({ plan_id: null });
  }

  static findByPlanId(plan_id) {
    return this.query()
      .where({ plan_id })
      .orderBy('order');
  }

  static insertOne(session) {
    return this.query().insertAndFetch(session);
  }

  static update(id, data) {
    return this.query()
      .update(data)
      .where({ id });
  }

  static deleteById(id) {
    return this.query().deleteById(id);
  }
}

module.exports = SessionRepository;
