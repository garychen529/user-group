'use strict';

const db = require("./_db");
const Group = require('./api/groups/group.model');
const User = require('./api/users/user.model');

Group.hasMany(User);
User.belongsTo(Group, {as: 'member'});

module.exports = db;