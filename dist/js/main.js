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

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
