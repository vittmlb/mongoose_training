/**
 * Created by Vittorio on 07/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    saldo: {
        type: Number,
        default: 0
    },
    idade: {
        type: Number,
        default: 0
    }
});

mongoose.model('User', UserSchema);