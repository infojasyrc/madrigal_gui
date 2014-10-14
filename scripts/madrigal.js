/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

var madrigalApp = angular.module('madrigalApp', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'ui.calendar']);

// configuring the routeProvider for each link
madrigalApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            controller: 'presentationController',
            templateUrl: 'views/intro/presentation.html'
        })

        .when('/local_data', {
            controller: 'localDataController',
            templateUrl: 'views/local_data/localData.html'
        })

        .otherwise({
            redirectTo: '/'
        });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$httpProvider.defaults.withCredentials = true;
});
