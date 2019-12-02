'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const engine = require('ejs-mate');

const routes = require('./routes');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/', routes);


module.exports = app;