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

        $scope.viewCategoriesUrl = 'views/local_data/categories.html';
        $scope.viewInstrumentstUrl = 'views/local_data/instruments.html';
        $scope.viewYearsUrl = 'views/local_data/years.html';
        $scope.viewCalendarUrl = 'views/local_data/calendar.html';
        $scope.viewInformationExperimentUrl = 'views/local_data/informationExperiment.html';

        $scope.uiConfig = {
            calendar:{
                height: "100%",
                firstDay: 1,
                editable: true,
                header:{
                    left: '',
                    center: 'title'
                }
            }
        };

        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        /* event source that pulls from google.com */
        $scope.eventSource = {};
        /* event source that contains custom events on the scope */
        $scope.events = [];
        /* event source that calls a function on every view switch */
        $scope.eventsF = function (start, end, callback) {
            var s = new Date(start).getTime() / 1000;
            var e = new Date(end).getTime() / 1000;
            var m = new Date(start).getMonth();
            var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
            callback(events);
        };

//        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
        $scope.eventSources = [];

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