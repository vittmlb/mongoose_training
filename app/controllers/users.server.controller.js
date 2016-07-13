/**
 * Created by Vittorio on 07/07/2016.
 */

var Users = require('mongoose').model('User');

exports.index = function(req, res) {
    if(req.session.loggedIn === true) {
        res.json(req.user);
    }
};

exports.create = function(req, res) {
    Users.create(req.body, function (err, newUser) {
        if(err) {
            console.log(err);
            return res.status(400).send({
                message: err
            });
        } else {
            req.session.user = {"name": newUser.name, "email": newUser.email, "_id": newUser._id};
            req.session.loggedIn = true;
            res.json(newUser);
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
    user.password = req.body.password;
    user.idade = req.body.idade;
    user.saldo = req.body.saldo;
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

exports.login = function(req, res) {
    Users.findOne({"email": req.body.email}).exec(function (err, user) {
        if(err) return next(err);
        if(!user) return next(new Error(`Failed to find user email: ${email}`));
        if (user.password === req.body.password) {
            req.session.user = {"name": user.name, "email": user.email};
            req.session.loggedIn = true;
            user.lastLogin = Date.now();
            user.save(function (err, user) {
                if(err) {
                    return res.status(400).send({
                        message: err
                    });
                } else {
                    res.json(user);
                }
            });
        } else {
            res.status(400).send({
                message: 'Authentication Failed'
            });
        }
    });
};

exports.findByParam = function(req, res) {
    Users.find().exec(function (err, users) {
        if(err) return next(err);
        if(!users) return next(new Error(`Didn't find any users with param`));
        res.json(users);
    });
};

