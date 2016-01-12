var book = angular.module('mainApp', ['ngRoute']);
book.controller('routeCtrl', function ($routeProvider) {
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'pages/top.html',
                controller: 'bookCtrl'
            })
            .when('/romance', {
                templateUrl: 'pages/romance.html',
                controller: 'romanceCtrl'
            })
            .when('/health', {
                templateUrl: 'pages/health.html',
                controller: 'healthCtrl'
            })
            .when('/business', {
                templateUrl: 'pages/business.html',
                controller: 'businessCtrl'
            })
            .otherwise('/business');
    });
book.controller('bookCtrl', function ($http, $log, $scope) {
    this.category = "All Categories";
    $scope.images = [];
    $http({
        method: 'POST',
        url: 'https://itunes.apple.com/us/rss/toppaidebooks/limit=10/genre=9007/json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        $scope.data = response.data.feed.entry;
        for (var i = 0; i < 10; i++) {
            $scope.images.push(response.data.feed.entry[i]["im:image"][2].label);
        }
        $log.info('http Success function called, with the following result: top', response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        $log.info('error', response);
    });
});
book.controller('romanceCtrl', function ($http, $log, $scope) {
    this.category = "Romance Category";
    $scope.images = [];
    $http({
        method: 'POST',
        url: 'https://itunes.apple.com/us/rss/toppaidebooks/limit=10/genre=9003/json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        $scope.data = response.data.feed.entry;
        for (var i = 0; i < 10; i++) {
            $scope.images.push(response.data.feed.entry[i]["im:image"][2].label);
        }
        $log.info('http Success function called, with the following result: romance ', response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        $log.info('error', response);
    });
});
book.controller('healthCtrl', function ($http, $log, $scope) {
    this.category = "Health Category";
    $scope.images = [];
    $http({
        method: 'POST',
        url: 'https://itunes.apple.com/us/rss/toppaidebooks/limit=10/genre=9025/json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        $scope.data = response.data.feed.entry;
        for (var i = 0; i < 10; i++) {
            $scope.images.push(response.data.feed.entry[i]["im:image"][2].label);
        }
        $log.info('http Success function called, with the following result: health ', response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        $log.info('error', response);
    });
});
book.controller('businessCtrl', function ($http, $log, $scope) {
    this.category = "Business Category";
    $scope.images = [];
    $http({
        method: 'POST',
        url: 'https://itunes.apple.com/us/rss/toppaidebooks/limit=10/genre=9009/json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        $scope.data = response.data.feed.entry;
        for (var i = 0; i < 10; i++) {
            $scope.images.push(response.data.feed.entry[i]["im:image"][2].label);
        }
        $log.info('http Success function called, with the following result: health ', response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        $log.info('error', response);
    });
});
book.controller('audioCtrl', function ($http, $log, $scope) {
    $scope.images = [];
    $http({
        method: 'POST',
        url: 'https://itunes.apple.com/us/rss/topaudiobooks/limit=10/genre=50000043/json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        $scope.data = response.data.feed.entry;
        for (var i = 0; i < 10; i++) {
            $scope.images.push(response.data.feed.entry[i]["im:image"][2].label);
        }
        $log.info('http Success function called, with the following result: health ', response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        $log.info('error', response);
    });
});