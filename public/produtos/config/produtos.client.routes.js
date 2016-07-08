/**
 * Created by Vittorio on 16/06/2016.
 */
angular.module('produtos').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/produto_create', {
                url: '/produtos/create',
                templateUrl: 'produtos/views/create-produto.client.view.html',
                controller: 'ProdutosController'
            })
            .state('/produto_lista', {
                url: '/produtos',
                templateUrl: 'produtos/views/list-produtos.client.view.html',
                controller: 'ProdutosController'
            })
            .state('/produto_view', {
                url: '/produtos/:produtoId',
                templateUrl: 'produtos/views/view-produto.client.view.html',
                controller: 'ProdutosController'
            })
            .state('/produto_edit', {
                url: '/produtos/:produtoId/edit',
                templateUrl: 'produtos/views/edit-produto.client.view.html'
            })

    }
]);


// angular.module('produtos').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.when('/produtos', {
//             templateUrl: '../produtos/views/list-produtos.client.view.html'
//         }).when('/produtos/create', {
//             templateUrl: '../produtos/views/create-produto.client.view.html'
//         }).when('/produtos/:produtoId', {
//             templateUrl: '../produtos/views/view-produto.client.view.html'
//         }).when('/produtos/:produtoId/edit', {
//             templateUrl: '../produtos/views/edit-produto.client.view.html'
//         });
// }]);