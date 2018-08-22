var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var indexTBRouter = require('./routes/indexTB');
var usersRouter = require('./routes/users');
var contenuRouter = require('./routes/contenu');
var contenuTBRouter = require('./routes/contenuTB');
var contactRouter = require('./routes/contact');
var contactTBRouter = require('./routes/contactTB');
var publicRouter = require('./routes/public');
var publicTBRouter = require('./routes/publicTB');
var definitionRouter = require('./routes/definition');
var definitionTBRouter = require('./routes/definitionTB');
var intervenantRouter = require('./routes/intervenant');
var intervenantTBRouter = require('./routes/intervenantTB');
var datesRouter = require('./routes/dates');
var principeRouter = require('./routes/principe');
var datesTBRouter = require('./routes/datesTB');
var principeTBRouter = require('./routes/principeTB');
var homeRouter = require('./routes/home');


//database
// New Code
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/userCDZ');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/userCDZ');

var app = express();

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// makes db accessible to router
app.use(function(req,res,next){
    req.db = db;
    next();
});


// chemins
app.use('/', homeRouter);
app.use('/index', indexRouter);
app.use('/indexTB', indexTBRouter);
app.use('/users', usersRouter);
app.use('/contenu', contenuRouter);
app.use('/contenuTB', contenuTBRouter);
app.use('/contact', contactRouter);
app.use('/contactTB', contactTBRouter);
app.use('/public', publicRouter);
app.use('/publicTB', publicTBRouter);
app.use('/definition', definitionRouter);
app.use('/definitionTB', definitionTBRouter);
app.use('/intervenant', intervenantRouter);
app.use('/intervenantTB', intervenantTBRouter);
app.use('/dates', datesRouter);
app.use('/datesTB', datesTBRouter);
app.use('/principe', principeRouter);
app.use('/principeTB', principeTBRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{ titre1: 'Centre de',
      layout: false});
});

module.exports = app;
