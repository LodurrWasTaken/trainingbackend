const router = require('express').Router();
const AuthService = require('../services/auth.service');
const SessionRepository = require('../repositories/session.repository');

router.post('/signup', async (req, res) => {
  const result = await AuthService.signup(req.body);

  res.send({
    status: result.data ? 201 : 409,
    payload: result.data
  });
});

router.post('/login', async (req, res) => {
  const user = await AuthService.login(req.body);
  if (!user.data) {
    res.send({
      status: 404,
      payload: user.data
    });
  }
  let payload = user.data;
  if (user.data.plan_id) {
    const planSessions = await SessionRepository.findByPlanId(
      user.data.plan_id
    );
    payload.plan = planSessions;
  }

  res.send({
    status: 200,
    payload
  });
});

module.exports = router;
