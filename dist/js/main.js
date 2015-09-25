angular.module('projectChromebook', [
    'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider){
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/state1');
        //
        // Now set up the
            $stateProvider
            .state('state1', {
              url: "/state1",
              templateUrl: "partials/state1.html"
            })
            .state('state1.list', {
              url: "/list",
              templateUrl: "partials/state1.list.html",
              controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
              }
            })
            .state('state2', {
              url: "/state2",
              templateUrl: "partials/state2.html"
            })
            .state('state2.list', {
              url: "/list",
              templateUrl: "partials/state2.list.html",
              controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
              }
            });
    })

    .controller('MainController', function (){
        //stuff goes here
    });

describe('sometest', function(){
	it('should be true', function(){
		expect(true).toEqual(true);
	});
});

describe('an addition test', function (){
	var a,b;
	beforeEach(function(){
		a = 2;
		b = 1;
	});
	it('should come to the value of three', function(){
		var result = a + b;
		expect(result).toEqual(3);
	});
	it('should not to come to the value of 13', function (){
		a = 12;
		var result = a + b;
		expect(result).not.toEqual(3);
	});
});

describe('another silly test', function (){
	it('should be false', function (){
		expect(false).toEqual(false);
	});
});

describe('', function (){
	var a = 7;
	var b = 4;
	it('totals 11', function (){
		expect(a + b).toEqual(11);
	});
});

describe('', function (){
	var a = 7;
	var b = 4;
	it('totals 11', function (){
		expect(a + b).not.toEqual(13);
	});
});
