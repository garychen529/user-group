'use strict';

const router = require('express').Router();
const Group = require('../db').models.Group; 

module.exports = router;

router.get('/', function (req, res, next) {
  Group.findAll()
  .then(function (groups) {
    res.json(groups);
  })
  .catch(next);
});
