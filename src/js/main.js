var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.playerList = [
  {
    'name' : 'Russell Wilson',
    'position' : 'Quarterback',
    'team' : 'Seattle Seahawks',
    'city' : 'Seattle',
    'state' : 'Washington',
    'positionNumber' : 3
  },
  {
    'name' : 'Marshawn Lynch',
    'position' : 'Runningback',
    'team' : 'Seattle Seahawks',
    'city' : 'Seattle',
    'state' : 'Washington',
    'positionNumber' : 24
  }
  ];
});
