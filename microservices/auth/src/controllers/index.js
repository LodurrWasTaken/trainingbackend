const router = require('express').Router();

router.use('/auth', require('./auth.controller'));
router.use('/users', require('./users.controller'));

// set global prefix
router.use('/api', router);

module.exports = router;
