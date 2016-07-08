/**
 * Created by Vittorio on 07/07/2016.
 */
angular.module('users').factory('Users', ['$resource', function ($resource) {
    return $resource('/api/users/:userId', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}]);