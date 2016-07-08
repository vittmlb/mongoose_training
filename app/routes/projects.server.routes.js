/**
 * Created by Vittorio on 08/07/2016.
 */

var projects = require('../controllers/projects.server.controller.js');

module.exports = function(app) {
    
    app.route('/api/projects')
        .get(projects.list)
        .post(projects.create);

    app.route('/api/projects/:projectId')
        .get(projects.read)
        .put(projects.update)
        .delete(projects.delete);

    app.param('projectId', projects.findById);
    
};