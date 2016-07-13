/**
 * Created by Vittorio on 07/07/2016.
 */

var users = require('../controllers/users.server.controller');

module.exports = function(app) {

    app.route('/api/users')
        .get(users.list)
        .post(users.create);

    app.route('/api/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.route('/login/doLogin')
        .post(users.login);

    app.route('/api/query')
        .post(users.findByParam);

    app.param('userId', users.findById);
    
};