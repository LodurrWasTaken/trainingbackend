const Redis = require('ioredis');

class RedisService {
  static connect() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    });
  }
  static set(key, value, lifetime) {
    this.client.set(key, value, 'EX', lifetime);
  }
  static async get(key) {
    return this.client.get(key);
  }
}

module.exports = RedisService;
