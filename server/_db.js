'use strict';

const Sequelize = require('sequelize');

const databaseURI = 'postgres://localhost/user-groups';

const db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;