'use strict';

const db = require('./_db');

const User = db.define('user', {
  username: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;