const User = require('../models/user.model');

class UserRepository extends User {
  static findOneByCriteria(payload) {
    return this.query().findOne(payload);
  }

  static insertOne(user) {
    return this.query().insertAndFetch(user);
  }

  static updateById(userId, data) {
    return this.query()
      .update(data)
      .where({ id: userId });
  }

  static deleteById(id) {
    return this.query().deleteById(id);
  }
}

module.exports = UserRepository;
