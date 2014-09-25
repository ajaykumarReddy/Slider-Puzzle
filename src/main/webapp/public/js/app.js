'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'ngRoute'
]).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/partials/home.html',
        controller: 'MyCtrl1'
    }).when('/game', {
        templateUrl: 'views/partials/partial1.html',
        controller: 'MyCtrl2'
    }).when('/highscore', {
        templateUrl: 'views/partials/partial2.html',
        controller: 'MyCtrl2'
    })


});