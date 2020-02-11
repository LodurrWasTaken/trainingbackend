const router = require('express').Router();
const SessionRepository = require('../repositories/session.repository');
const SessionService = require('../services/session.service');

router.get('/', async (req, res) => {
  const sessions = await SessionRepository.getAll();

  res.send({
    status: 200,
    payload: sessions
  });
});

router.post('/', async (req, res) => {
  const inserted = await SessionRepository.insertOne(req.body);

  res.send({
    status: 201,
    payload: inserted
  });
});

router.put('/', async (req, res) => {
  console.log(req.body);
  await SessionService.updateMany(req.body);

  res.send({
    status: 200
  });
});

router.patch('/:sessionId/check', async (req, res) => {
  const { sessionId } = req.params;
  const { status } = req.body;

  await SessionService.setChecked(sessionId, status);

  res.send({
    status: 200
  });
});

router.delete('/:sessionId', async (req, res) => {
  const { sessionId } = req.params;
  const result = await SessionRepository.deleteById(sessionId);

  res.send({
    status: Boolean(result) ? 200 : 404
  });
});

module.exports = router;
