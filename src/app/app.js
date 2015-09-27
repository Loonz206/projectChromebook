angular.module('myApp', [
  'ui.router'
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

.controller( 'AppCtrl', function AppCtrl ( $scope ) {
  $scope.$on('$stateChangeSuccess', function(event, toState){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' || ProjectChromebook' ;
    }
  });
});