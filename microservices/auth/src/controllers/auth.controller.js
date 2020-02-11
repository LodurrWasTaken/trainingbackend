const router = require('express').Router();
const UserService = require('../services/user.service');
const RedisService = require('../services/redis.service');

router.post('/signup', async (req, res) => {
  const user = await UserService.create(req.body);
  res.send(user);
});

router.post('/login', async (req, res) => {
  const user = await UserService.findOne(req.body);
  res.send(user);
});

module.exports = router;
