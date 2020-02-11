const RequestService = require('./request.service');

class UserService {
  static updatePlanId(userId, planId) {
    return RequestService.doPatch({
      path: `users/${userId}`,
      payload: { planId }
    });
  }
}

module.exports = UserService;
