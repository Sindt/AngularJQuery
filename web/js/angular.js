var app = angular.module("myApp", []);
app.controller("HttpCtrl", ["$http", function ($http) {
        var self = this;
        $http({
            method: 'GET',
            url: 'api/member'
        }).then(function successCallback(response) {
            self.members = response.data;
        }, function errorCallback(response) {
            self.error = response.status + " Noooo! " + response.statusText + "  upps";
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    }]);