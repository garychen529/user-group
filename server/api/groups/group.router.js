'use strict';

const router = require('express').Router();
const Group = require('./group.model');

router.get('/', function (req, res, next) {
  Group.findAll()
  .then(function (users) {
    res.json(users);
  })
  .catch(next);
});