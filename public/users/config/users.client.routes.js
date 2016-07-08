/**
 * Created by Vittorio on 07/07/2016.
 */
angular.module('users').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('user_create', {
                url: '/users/create',
                templateUrl: 'users/views/create-user.client.view.html',
                controller: 'UsersController'
            })
            .state('user_list', {
                url: '/users',
                templateUrl: 'users/views/list-users.client.view.html',
                controller: 'UsersController'
            })
            .state('user_view', {
                url: '/users/:userId',
                templateUrl: 'users/views/view-user.client.view.html',
                controller: 'UsersController'
            })
            .state('user_edit', {
                url: '/users/:userId/edit',
                templateUrl: 'users/views/edit-user.client.view.html',
                controller: 'UsersController'
            });
    }
]);
