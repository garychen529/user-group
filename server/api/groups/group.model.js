'use strict';

var Sequelize = require('sequelize');

var db = require('../../_db');

var Group = db.define('group', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Group;