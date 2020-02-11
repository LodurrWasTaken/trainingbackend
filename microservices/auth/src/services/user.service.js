const crypto = require('crypto');
const UserRepository = require('../repositories/user.repository');
const JwtService = require('./jwt.service');
const RedisService = require('./redis.service');

class UserService {
  static async create({ email, password }) {
    const userInDb = await UserRepository.findOneByCriteria({ email });
    if (userInDb) {
      return null;
    }
    const md5 = crypto.createHash('md5');
    const hash = md5.update(password).digest('hex');
    const user = await UserRepository.insertOne({
      email,
      hashed_password: hash
    });
    user.token = JwtService.sign(email);
    RedisService.set(user.email, user.token, 20);

    return user;
  }

  static async findOne({ email, password }) {
    const md5 = crypto.createHash('md5');
    const hash = md5.update(password).digest('hex');
    const user = await UserRepository.findOneByCriteria({
      email,
      hashed_password: hash
    });
    if (user) {
      user.token = JwtService.sign(email);
      RedisService.set(user.email, user.token, 20);
    }

    return user;
  }

  static async updatePlanId(id, planId) {
    return UserRepository.updateById(id, { plan_id: planId });
  }
}

module.exports = UserService;
