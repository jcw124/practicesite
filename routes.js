module.exports = function(app){

    const application = require('./routes/application');
    const routeone = require('./routes/routeone');
    const routetwo = require('./routes/routetwo');
    const routethree = require('./routes/routethree');

    app.use('/', application);
    app.use('/routeone', one);
    app.use('/routetwo', two);
    app.use('/routethree', three);
}