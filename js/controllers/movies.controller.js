angular
  .module('myApp')
  .controller('MovieController',
  MovieController);

  function MovieController($scope, $stateParams, MoviesService){
    console.log($stateParams);
    var title = $stateParams.title;
    MoviesService.getMovies(title)
    .then(function(movies){
      $scope.movies = movies
    })
  }
