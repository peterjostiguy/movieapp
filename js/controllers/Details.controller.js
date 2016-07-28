angular
  .module('myApp')
  .controller('DetailsController', DetailsController);

  function DetailsController($scope, $stateParams, DetailService){
    DetailService.getDetails($stateParams.id)
    .then(function(details){
      $scope.details = details;
    });
  };
