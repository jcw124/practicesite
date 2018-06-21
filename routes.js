module.exports = function(app){

    const application = require('./routes/application');
    const shop = require('./routes/shop');
    const pets = require('./routes/pets');
    const grooming = require('./routes/grooming');

    app.use('/', application);
    app.use('/routeone', shop);
    app.use('/pets', pets);
    app.use('/grooming', grooming);
}