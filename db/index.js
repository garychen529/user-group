'use strict';

const db = require("./_db");
const Group = require('./group');
const User = require('./user');
const Promise = require('bluebird');

Group.hasMany(User);
User.belongsTo(Group);

module.exports = {
	models : {
		User : User,
		Group : Group
	},
	sync: function() {
	  return db.sync({ force: true })
	  .then(function() {
	  	return Promise.all([
	  		User.create({ username: 'moe', password: 'bar'}),
			User.create({ username: 'larry', password: 'foo'}),
			Group.create({ name: 'admin'}),
			Group.create({ name: 'hr'}),
		]);
	  })
	  .spread(function(moe, larry, admin, hr) {
	  	moe.groupId = admin.id;
		larry.groupId = hr.id;
		return Promise.all([
		  moe.save(),
		  larry.save()
		]);
	  });
	}
};
