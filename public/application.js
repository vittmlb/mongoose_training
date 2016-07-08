/**
 * Created by Vittorio on 16/06/2016.
 */

var mainAppModuleName = 'impApp';
var mainAppModule = angular.module(mainAppModuleName, ['ngResource', 'ngRoute', 'produtos', 'ui.router']);

mainAppModule.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('!');
}]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainAppModuleName]);
});