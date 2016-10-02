'use strict';

const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'browser')));

app.use(require('body-parser').json());

app.use(require('express-session')({ secret: process.env.SECRET }));


app.get('/', function(req, res) {
	res.render('index');
});

app.use('/api', require('./routes'));

module.exports = app;
