/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.controller('menuController', function ($scope, $location) {
    "use strict";
    $scope.viewUrl = 'views/base/navbar.html';

    // function to redirect to the view (for accordion which doesn't have child)
    $scope.redirect = function (url) {
        $location.path('/' + url);
    };

    //if the route and the path are the same then return true else return false
    $scope.ActiveURL = function (route) {
        return route  === $location.path();
    };

});