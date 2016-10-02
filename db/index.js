'use strict';

const db = require("./_db");
const Group = require('./group');
const User = require('./user');

Group.hasMany(User);
User.belongsTo(Group);

module.exports = {
	models: {
		User: User,
		Group: Group
	},
	sync: function(){
	  return db.sync({ force: true })
	    .then(function(){
			Promise.all([
				User.create({ username: 'moe', password: 'bar'}),
				Group.create({ name: 'admin'}),
			])
	    });
	}
};
