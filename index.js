var express = require('express');

var app = express();

var port = process.env.PORT || 8040;
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//set up our express application
app.use(morgan('dev'));
//app.use(bodyParser()); // get information from html forms

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'facelift',
    resave: true,
    saveUninitialized: true
  })
);

app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app); // load our routes and pass in our app and fully configured passport

//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  res
    .status(404)
    .render('404', { title: 'Sorry, page not found', session: req.sessionbo });
});

app.use(function(req, res, next) {
  res.status(500).render('404', { title: 'Sorry, page not found' });
});
exports = module.exports = app;
