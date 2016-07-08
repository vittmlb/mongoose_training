/**
 * Created by Vittorio on 16/06/2016.
 */
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    mongoose.connection.on('connected', function () {
        console.log(`Mongoose connected at ${config.db}`);
    });

    mongoose.connection.on('error', function () {
        console.log(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose disconnected');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });

    require('../app/models/produtos.server.model.js');
    require('../app/models/users.server.model');
    require('../app/models/projects.server.model');
    
    return db;
};