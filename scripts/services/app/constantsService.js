/**
 * author: Jose Sal y Rosas.
 * email: infojasyrc@gmail.com
 */

madrigalApp.factory("constantsService",
    function () {
        "use strict";

        // Host based on Django Framework
        var _host = "http://10.211.55.10:8000/openmadrigal/",
            _urlCategories = "data/categories/doList/",
            _urlInstruments = "data/instruments/doList/";

        //Return service
        return {
            host: _host,
            urlCategories: _urlCategories,
            urlInstruments: _urlInstruments
        };
    });