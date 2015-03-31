//function FirstCtrl($scope){
//  $scope.data = {message: "Hello"};
//}

var app = angular.module('ControllerApp', []);
app.controller('FirstCtrl', function($scope) {
  $scope.data = {message: "Hello"};
});