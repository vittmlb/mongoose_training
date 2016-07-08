/**
 * Created by Vittorio on 08/07/2016.
 */
angular.module('projects').controller('ProjectsController', ['$scope', '$stateParams', '$location', 'Projects', '$state',
    function($scope, $stateParams, $location, Projects, $state) {
        $scope.create = function() {
            var project = new Projects({
                projectName: this.projectName,
                contributors: this.contributors,
                tasks: this.tasks
            });
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
    }
]);