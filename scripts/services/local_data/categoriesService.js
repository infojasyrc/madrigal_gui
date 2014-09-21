/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.factory("categoriesService", ["$http", "$q", "constantsService",
    function ($http, $q, constantsService) {
        "use strict";

        var _loadData = function () {
            var defer = $q.defer(),
                url = constantsService.host + constantsService.urlCategories;

            $http.post(url)
                .success(function (result) {
                    defer.resolve(result);
                })
                .error(function (data, status, headers, config) {
                    defer.reject(status);
                });

            return defer.promise;
        };

        //Return service
        return {
            getData: _loadData
        };
    }]);
