"use strict";

const router = require('express').Router();
const User = require('../db').models.User;
// const Group = require('../db').models.Group;

router.post('/', function(req, res, next) {
	User.findOne({
		where : {
			username : req.body.username
		}
	})
	.then(function(user) {
		if (user) {
			return res.status(409).send("The username is taken.");
		}
		User.create({
			username : req.body.username,
			password : req.body.password
		})
		.then(function(createdUser) {
			res.send(createdUser);
		});
	})
	.catch(next);
});

module.exports = router;