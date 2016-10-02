'use strict';

var db = require('./_db');

var User = db.define('user', {
  username: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;