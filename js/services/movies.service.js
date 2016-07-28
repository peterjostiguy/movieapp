(function(){
  angular
  .module('myApp')
  .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var URL = 'http://www.omdbapi.com/?s=';
    return {
      getMovies: function(title){
        // console.log(title);
        return $http.get(URL+title)
        .then(function (result){
          return result.data.Search;
        })
      }
    }
  }
})()
