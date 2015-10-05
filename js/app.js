var app = angular.module('kennelkeeper', ['ionic']);

app.controller('ContentController', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };
})