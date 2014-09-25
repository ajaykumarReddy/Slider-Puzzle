'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
        .controller('AppCtrl', function($scope, $http) {



//            $http({
//                method: 'GET',
//                url: '/api/name'
//            }).
//                    success(function(data, status, headers, config) {
//                        $scope.name = data.name;
//                    }).
//                    error(function(data, status, headers, config) {
//                        $scope.name = 'Error!'
//                    });

        }).controller('MyCtrl1', function($scope) {
    $scope.name = 'Bob';

}).controller('MyCtrl2', function($scope, words, $log, $route, $location,$http) {
    $scope.words = words;
    $scope.question = {};
    $scope.word = words[Math.floor(Math.random() * words.length)];
    $log.info("Word ..." + $scope.word);
    $scope.choice1 = words[Math.floor(Math.random() * words.length)];
    $scope.choice2 = words[Math.floor(Math.random() * words.length)];

    $scope.question = {
        choices: [{
                id: 1,
                text: $scope.word.es,
            }, {
                id: 2,
                text: $scope.choice1.es,
            }, {
                id: 3,
                text: $scope.choice2.es,
            }]
    };

    $scope.choice1 = $scope.question.choices[Math.floor(Math.random() * $scope.question.choices.length)];
    $scope.choice2 = $scope.question.choices[Math.floor(Math.random() * $scope.question.choices.length)];
    $scope.choice3 = $scope.question.choices[Math.floor(Math.random() * $scope.question.choices.length)];

    $scope.count = 0;
    $scope.correctAnswer = function(object) {
        $log.info("$scope.count ..." + $scope.count);
        if ($scope.word.es == object.text) {
            $scope.count = $scope.count + 1;
            if ($scope.count == 3) {
                $location.path('/highscore');
            }
            $scope.word = words[Math.floor(Math.random() * words.length)];
            $scope.choice1 = words[Math.floor(Math.random() * words.length)];
            $scope.choice2 = words[Math.floor(Math.random() * words.length)];
            $scope.question = {
                choices: [{
                        id: 1,
                        text: $scope.word.es,
                    }, {
                        id: 2,
                        text: $scope.choice1.es,
                    }, {
                        id: 3,
                        text: $scope.choice2.es,
                    }]
            };
            $log.info("correct answer...");
        } else {
            $location.path('/highscore');
            $log.info("wrong answer...");
        }
        // $route.reload();

    };
    $scope.addUser = function() {
        console.log($scope.user);
        $http({
            method: 'POST',
            url: '/addUser',
            data: $scope.user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).
                success(function(response) {
                    console.log("success");
                }).
                error(function(response) {
                    console.log("error");
                });

    };

});