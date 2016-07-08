/**
 * Created by Vittorio on 07/07/2016.
 */

var Users = require('mongoose').model('User');

exports.create = function(req, res) {
    var user = new Users(req.body);
    user.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(user);
        }
    });
};

exports.list = function(req, res) {
    Users.find().exec(function (err, users) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(users);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

exports.findById = function(req, res, next, id) {
    Users.findById(id).exec(function (err, user) {
        if(err) return next(err);
        if(!user) return next(new Error(`Failed to load user id: ${id}`));
        req.user = user;
        next();
    });
};

exports.update = function(req, res) {
    var user = req.user;
    user.name = req.body.name;
    user.email = req.body.email;
    user.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res) {
    var user = req.user;
    user.remove(function(err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(user);
        }
    })
};

