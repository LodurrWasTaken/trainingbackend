const router = require('express').Router();
const UserService = require('../services/user.service');

router.patch('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { planId } = req.body;
  const result = await UserService.updatePlanId(userId, planId);

  res.send(Boolean(result));
});

module.exports = router;
