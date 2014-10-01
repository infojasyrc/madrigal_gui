/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.controller(
    "localDataController", ["$scope", "categoriesService", "instrumentsService", "yearMonthsService",
    function ($scope, categoriesService, instrumentsService, yearMonthsService) {
        "use strict";

        $scope.categoriesList = [];
        $scope.instrumentList = [];
        $scope.yearList = [];
        $scope.info = {
            data: {}
        };
        $scope.enableDatePicker = false;

        $scope.viewCategoriesUrl = 'views/local_data/categories.html';
        $scope.viewInstrumentstUrl = 'views/local_data/instruments.html';
        $scope.viewYearsUrl = 'views/local_data/years.html';
        $scope.viewCalendarUrl = 'views/local_data/calendar.html';
        $scope.viewInformationExperimentUrl = 'views/local_data/informationExperiment.html';

        categoriesService.getData()
            .then(function (data) {
                $scope.categoriesList = data;
            });

        $scope.onChangeCategory = function() {
            instrumentsService.getData($scope.info.data.categoryID)
                .then(function (data) {
                    $scope.instrumentList = data;
                });
        };

        $scope.onChangeInstrument = function() {
            yearMonthsService.getData($scope.info.data.instrumentID)
                .then(function (data) {
                    $scope.yearList = data;
                });
        };

        $scope.onChangeYear = function() {
            if ($scope.info.data.year) {
                $scope.enableDatePicker = true;
            }
        };

    }]);