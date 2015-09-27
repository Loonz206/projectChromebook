angular.module('myApp', [
  'ui.router',
  'firebase'
])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        data: {
          pageTitle: 'Home'
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        data: {
          pageTitle: 'About'
        }
      })
      .state('stylesheet', {
        url: '/stylesheet',
        templateUrl: 'app/stylesheet/stylesheet.html',
        data: {
          pageTitle: 'Stylesheet'
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        data: {
          pageTitle: 'Contact'
        }
      });
}])

.controller( 'AppCtrl', function AppCtrl ( $scope, $firebaseObject ) {
  $scope.$on('$stateChangeSuccess', function(event, toState){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' || ProjectChromebook' ;
    }

   var ref = new Firebase("http://projectchromebook.firebaseio.com");

   // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");

  });
});