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

angular.module('users').factory('UsersLogin', ['$http', function ($http) {
    var _login = function(user) {
        return $http.post('/login/doLogin', user);
    };
    return {
        login: _login
    }
}]);


angular.module('users').factory('UsersQuery', ['$http', function ($http) {
    var _login = function(user) {
        return $http.post('/login/doLogin', user);
    };
    return {
        login: _login
    }
}]);


// Angular Factory

angular.module('users').constant('multiplicadorSaldo', {
    multiplicador: 10
});
angular.module('users').factory('SaldoFactory', function (multiplicadorSaldo) {
    var _calculaSaldo = function() {
        var saldo_total = 82 * multiplicadorSaldo.multiplicador;
        return {
            saldo: saldo_total
        }
    };
    return {
        calculaSaldo: _calculaSaldo
    }
});

// Angular Services
angular.module('users').service('SaldoService', function (multiplicadorSaldo) {
    this.calculaSaldo = function() {
        var saldo_total = 82 * (multiplicadorSaldo.multiplicador / 2);
        return {
            saldo: saldo_total
        }
    };
});
//
// angular.module('users').config(function (SaldoProvider) {
//     SaldoProvider.setMultiplicador(2);
// });
// angular.module('users').service('Saldo', function (multiplicadorSaldo) {
//     var _multiplicador = multiplicadorSaldo.multiplicador;
//     var _calculaSaldo = function() {
//         var saldo_total = 82 * (multiplicadorSaldo.multiplicador / 3);
//         return {
//             saldo: saldo_total
//         }
//     };
//     this.setMultiplicador = function(valor_multiplicador) {
//         _multiplicador = valor_multiplicador;
//     };
//     this.$get = function() {
//         return {
//             calculaSaldo: _calculaSaldo
//         }
//     };
// });