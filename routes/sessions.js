var router = require('express').Router();

var User = require('../db').models.User;
var Group = require('../db').models.Group;

router.get('/', function(req, res, next){
  if(!req.session.userId)
    return res.sendStatus(401);
  User.findById(req.session.userId, { include: [ Group ]})
    .then(function(user){
      if(user)
        return res.send(user);
      req.session.destroy();
      res.sendStatus(401);
    });
});

router.delete('/', function(req, res, next){
  req.session.destroy();
  res.sendStatus(200);
});

router.post('/', function(req, res, next){
  User.findOne({ where: { username: req.body.username, password: req.body.password }})
	.then(function(user){
		if(user){
			req.session.userId = user.id;
			return res.send(user);
		}
		res.sendStatus(401);
	});
});

module.exports = router;
