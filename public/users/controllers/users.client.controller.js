/**
 * Created by Vittorio on 07/07/2016.
 */
angular.module('users').controller('UsersController', ['$scope', '$stateParams', '$location', 'Users', '$state',
    function($scope, $stateParams, $location, Users, $state) {
        $scope.create = function() {
            var user = new Users({
                name: this.name,
                email: this.email
            });
            user.$save(function (response) {
                $location.path('/users/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.find = function() {
            $scope.users = Users.query();
        };
        $scope.findOne = function() {
            $scope.user = Users.get({
                userId: $stateParams.userId
            });
        };
        $scope.update = function() {
            $scope.user.$update(function (response) {
                $location.path('/users/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.delete = function(user) {
            if(user) {
                user.$remove(function () {
                    for (var i in $scope.users) {
                        if ($scope.users[i] === user) {
                            $scope.users.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.user.$remove(function () {
                    $location.path('/users');
                });
            }
        };
    }
]);