/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

var madrigalApp = angular.module('madrigalApp', ['ngRoute']);

// configuring the routeProvider for each link
madrigalApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'presentationController',
            templateUrl: 'views/intro/presentation.html'
        })

        .when('/local_data', {
            controller: 'localDataController',
            templateUrl: 'views/local_data/categories.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});
