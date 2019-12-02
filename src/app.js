'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const engine = require('ejs-mate');
const passport = require('passport');
const connectFlash = require('connect-flash');

const session = require('express-session');
const { signMessages } = require("./middlewares");

require("./passport/local-auth");
require('./database');

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


app.use(session({
    secret: "mysecretsession",
    resave: false,
    saveUninitialized: false
}));
app.use(connectFlash());
app.use(passport.initialize());
app.use(passport.session());
signMessages(app);

//routes
app.use('/', routes);


module.exports = app;