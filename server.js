/**
 * Created by Vittorio on 16/06/2016.
 */
var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(5000);

module.exports = app;

console.log(`Server listening on port 5000`);