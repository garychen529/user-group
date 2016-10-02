'use strict';

var db = require('./_db');

var Group = db.define('group', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Group;