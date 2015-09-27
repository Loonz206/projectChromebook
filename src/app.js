angular.module('myApp', [
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.html'
      })
}])