var app = angular.module('myApp', ['ui.router']).config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    conroller: 'HomeController',
    templateUrl: 'js/views/home.html'
  }).state('home.movies', {
    url: 'movies/:title',
    controller: 'MovieController',
    templateUrl: 'js/views/movies.html'
  }).state('home.details',{
    url: 'movie:id',
    controller: 'DetailsController',
    templateUrl: 'js/views/details.html'
  })
}
