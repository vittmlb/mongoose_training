/**
 * Created by Vittorio on 08/07/2016.
 */
angular.module('projects').controller('ProjectsController', ['$scope', '$stateParams', '$location', 'Projects', '$state', 'Users', '$http',
    function($scope, $stateParams, $location, Projects, $state, Users, $http) {
        $scope.users = Users.query();
        $scope.currentContributor = {};
        $scope.projTasks = [];
        $scope.projContributors = [];
        $scope.contributors = [];
        
        $scope.create = function() {
            var project = new Projects({
                projectName: this.projectName,
                createdBy: this.createdBy,
                contributors: this.contributors,
                tasks: $scope.projTasks
            });
            $scope.projTasks = [];
            project.$save(function (response) {
                $location.path('/projects/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.find = function() {
            $scope.projects = Projects.query();
        };
        $scope.findOne = function() {
            $scope.project = Projects.get({
                projectId: $stateParams.projectId
            });
        };
        $scope.update = function() {
            $scope.project.$update(function (response) {
                $location.path('/projects/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.delete = function(project) {
            if(project) {
                project.$remove(function () {
                    for(var i in $scope.projects) {
                        if($scope.projects[i] === project) {
                            $scope.projects.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.project.$remove(function () {
                    $location.path('/projects');
                });
            }
        };
        $scope.pushTask = function() {
            var task = {
                taskName: $scope.taskName,
                taskDesc: $scope.taskDesc,
                createdBy: $scope.taskAssignedTo
            };
            $scope.projTasks.push(task);
            $scope.taskName = '';
            $scope.taskDesc = '';
            $scope.taskAssignedTo = '';
        };
        $scope.pushContributor = function() {
            var current = JSON.parse($scope.currentContributor);
            $scope.projContributors.push(current);
            $scope.contributors.push(current._id);
            $scope.currentContributor = {};
        };
        
    }
]);