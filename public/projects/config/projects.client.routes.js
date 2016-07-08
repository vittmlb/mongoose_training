/**
 * Created by Vittorio on 08/07/2016.
 */
angular.module('projects').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('project_create', {
                url: '/projects/create',
                templateUrl: 'projects/views/create-project.client.view.html',
                controller: 'ProjectsController'
            })
            .state('project_list', {
                url: '/projects',
                templateUrl: 'projects/views/list-projects.client.view.html',
                controller: 'ProjectsController'
            })
            .state('project_view', {
                url: '/projects/:projectId',
                templateUrl: 'projects/views/view-project.client.view.html',
                controller: 'ProjectsController'
            })
            .state('project_edit', {
                url: '/projects/:projectId/edit',
                templateUrl: 'projects/views/edit-project.client.view.html'
            });
    }
]);