const router = require('express').Router();
const PlanRepository = require('../repositories/plan.repository');
const UserService = require('../services/user.service');
const SessionRepository = require('../repositories/session.repository');

router.get('/:planId', async (req, res) => {
  const plan = await PlanRepository.findOne(req.params.planId);

  res.send({
    status: 200,
    payload: plan
  });
});

router.post('/', async (req, res) => {
  const { userId } = req.body;
  const plan = await PlanRepository.insertOne();
  await UserService.updatePlanId(userId, plan.id);

  res.send({
    status: 201,
    payload: plan
  });
});

router.delete('/:planId', async (req, res) => {
  const { planId } = req.params;
  const result = await PlanRepository.deleteById(planId);

  res.send({
    status: Boolean(result) ? 200 : 404
  });
});

module.exports = router;
