'use strict';

const db = require('./_db');

const Group = db.define('group', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Group;