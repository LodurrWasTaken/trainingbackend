const router = require('express').Router();
const checkAuth = require('../middlewares/check-auth.middleware');

router.use('/sessions', checkAuth, require('./sessions.controller'));
router.use('/plans', checkAuth, require('./plans.controller'));
router.use('/auth', require('./auth.controller'));

// set global prefix
router.use('/api', router);

module.exports = router;
