'use strict';

const app = require('./app');
const db = require('./db');

const port = 3000;
const server = app.listen(port, function (err) {
  if (err) {
  	throw err;
  }
  console.log('HTTP server patiently listening on port', port);
  db.sync()
  .then(function () {
    console.log('Postgres server is connected, too');
  });
});

module.exports = server;