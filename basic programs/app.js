(function () {
'use strict';

angular.module('myapp', [])

.controller('myController', function ($scope) {
  
  $scope.name = "Gaurav";
  $scope.sayHi = 


  $scope.hi = function(string) {
  	  'hi !' + $scope.name
  };


});
})();