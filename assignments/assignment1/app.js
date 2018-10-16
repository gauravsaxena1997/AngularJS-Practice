(function () {
'use strict';

angular.module('ListChecker', [])
.controller('Controller', Checker);

Checker.$inject = ['$scope'];
function Checker ($scope) {
  $scope.list = "";
  $scope.checkDishes = function() {
    var msg = calculateLength($scope.list);
    $scope.msg = msg;
  }

  function calculateLength (string) {
    if (string.length>0) {
      var len = string.split(',').length;
      if (len<=3) {
        return "Enjoy!";
      }
      else {
        return "Too much!";
      }
    }
    else {
      return 'Please enter data first';
    }
  }

}


})();
