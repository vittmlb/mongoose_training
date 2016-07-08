/**
 * Created by Vittorio on 16/06/2016.
 */
angular.module('produtos').factory('Produtos', ['$resource', function($resource) {
    return $resource('/api/produtos/:produtoId', {
        produtoId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
