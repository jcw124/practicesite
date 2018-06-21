//dependencies
const EXPRESS = require('express');
const PATH = require('path');
const LOGGER = require('morgan');
const BODYPARSER = require('body-parser');


const APP = express();

const EXPHBS = require('express-handlebars');
APP.engine('handlebars', exphb({
    defaultLayout: 'main'
}));
APP.set('view engine', 'handlebars');


APP.use(logger('combined'));
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extend: false}));
APP.use(EXPRESS.static(PATH.join(_dirname, 'public')));

require('./routes')(APP);

APP.use(function(req, res, next){
    const err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

APP.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (APP.get('env') === 'development') ? err : {}
    })
  });

  module.exports = app;
