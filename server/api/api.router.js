'use strict';

const router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/groups', require('./groups/group.router'));

module.exports = router;