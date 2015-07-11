var nslApp = angular.module('nslApp', []);

nslApp.controller('NslMain', function ($scope) {
  $scope.currApp = {
    'name' : 'exemple',
    'link' : 'null'
  }
  $scope.appList = [
    {'name': '9Gag',
     'link': 'http://9gag.com'},
    {'name': 'Localhost',
     'link': 'localhost/nsl'},
    {'name': 'Youtube',
     'link': 'http://youtube.com'}
  ];

  $scope.addApp = function() {
    $scope.appList.push($scope.currApp);
        return true; 
    }
});