var nslApp = angular.module('nslApp', ['ngRoute']);
nslApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'modules/home/view.html',
      controller: 'NavCtrl'
    }).
    when('/apps', {
      templateUrl: 'modules/apps/view.html',
      controller: 'MainCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
  }]);
