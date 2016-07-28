(function(){
  angular.module('myApp')
  .factory('DetailService', DetailService);

  function DetailService($http) {
    var URL = 'http://www.omdbapi.com/?i='

    return{
      getDetails: function(id){
        return $http.get(URL + id)
        .then(function(result){
          console.log(result);
          return result.data;
        });
      }
    };
  };
})();
