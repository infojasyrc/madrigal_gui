/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.factory("instrumentsService", ["$http", "$q", "constantsService",
    function ($http, $q, constantsService) {
        "use strict";

        var _loadData = function (categoryID) {
            var defer = $q.defer(),
                url = constantsService.host + constantsService.urlInstruments;

            $http.post(url,
                {
                    cat_id: categoryID
                },
                {
                    responseType: 'json',
                    headers     : {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }
                })
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
