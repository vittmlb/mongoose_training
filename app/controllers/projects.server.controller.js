/**
 * Created by Vittorio on 08/07/2016.
 */

var Projects = require('mongoose').model('Project');

exports.create = function(req, res) {
    var project = new Projects(req.body);
    project.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(project);
        }
    });
};

exports.list = function(req, res) {
    Projects.find().exec(function (err, projects) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(projects);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.project);
};

exports.findById = function(req, res, next, id) {
    Projects.findById(id).exec(function (err, project) {
        if(err) return next(err);
        if(!project) return next(new Error(`Failed to load project id: ${id}`));
        req.project = project;
        next();
    });
};

exports.update = function(req, res) {
    var project = req.project;
    project.projectName = req.body.projectName;
    project.contributors = req.body.contributors;
    project.tasks = req.body.tasks;
    project.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(project);
        }
    });
};

exports.delete = function(req, res) {
    var project = req.project;
    project.remove(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(project);
        }
    });
};