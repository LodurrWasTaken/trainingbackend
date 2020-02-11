const jwt = require('jsonwebtoken');

class JwtService {
  static sign(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
  }
}

module.exports = JwtService;
