'use strict';

const router = require('express').Router();
const User = require('../db').models.User;

router.param('id', function (req, res, next, id) {
  User.findById(id)
  .then(function (user) {
    if (!user) {
      res.sendStatus(404);
    }
    req.requestedUser = user;
    next();
  })
  .catch(next);
});

router.get('/', function (req, res, next) {
  User.findAll()
  .then(function (users) {
    res.json(users);
  })
  .catch(next);
});

router.put('/:id', function (req, res, next) {
  req.requestedUser.update(req.body)
  .then(function (user) {
    res.json(user);
  })
  .catch(next);
});

module.exports = router;
