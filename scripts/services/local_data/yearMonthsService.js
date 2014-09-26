/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.factory("yearMonthsService", ["$http", "$q", "constantsService",
    function ($http, $q, constantsService) {
        "use strict";

        var _loadData = function (elementID) {
            var defer = $q.defer(),
                url = constantsService.host + constantsService.urlYears;

            $http.post(url,
                {
                    inst_id: elementID
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
