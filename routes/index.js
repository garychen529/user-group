'use strict';

const router = require('express').Router();

router.use('/users', require('./users'));

router.use('/groups', require('./groups'));

router.use('/sessions', require('./sessions'));

router.use('/register', require('./register'));

module.exports = router;
