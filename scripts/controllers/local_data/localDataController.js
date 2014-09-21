/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.controller(
    "localDataController", ["$scope", "categoriesService", "instrumentsService",
    function ($scope, categoriesService, instrumentsService) {
        "use strict";

        $scope.categoriesList = [];
        $scope.instrumentList = [];
        $scope.viewCategoriesUrl = 'views/local_data/categories.html';
        $scope.viewInstrumentstUrl = 'views/local_data/instruments.html';
        $scope.viewCalendarUrl = 'views/local_data/calendar.html';
        $scope.viewInformationExperimentUrl = 'views/local_data/informationExperiment.html';
        $scope.info = {
            data: {}
        };

        categoriesService.getData()
            .then(function (data) {
                $scope.categoriesList = data;
            });

        $scope.init = function () {
            console.log("Loading");
        };

        $scope.onChangeCategory = function() {
            instrumentsService.getData($scope.info.data.categoryID)
                .then(function (data) {
                    $scope.instrumentList = data;
                });
        };

        $scope.init();

    }]);