'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use('/api', require('./routes'));

app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res) {
	res.render('index');
});

module.exports = app;
