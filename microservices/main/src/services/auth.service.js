const RequestService = require('./request.service');

class AuthService {
  static signup(user) {
    return RequestService.doPost({ path: 'auth/signup', payload: user });
  }
  static login(user) {
    return RequestService.doPost({ path: 'auth/login', payload: user });
  }
}

module.exports = AuthService;
