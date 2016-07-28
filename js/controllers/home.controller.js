
angular
  .module('myApp')
  .controller('HomeController',
  HomeController);

function HomeController($scope, $state) {
  $scope.getMovies = function(){
    $state.go('home.movies', {
      title: $scope.title
    });
    console.log($scope);
  };
};
