angular.module('starter.controllers', [])

.controller('CalcCtrl',function($scope){
  $scope.message = "Yeah";

  $scope.sum = function($scope){
    var a = this.num1;
    //console.log(a);
    var b = this.num2;

    var result = a + b;

    alert(result);

  }

  $scope.sub = function($scope){
    var a = this.num1, b = this.num2;
    var result = a - b;
    alert(result);
  }

  $scope.mult = function($scope){
    var a = this.num1, b = this.num2, result = a * b;
    alert(result);
  }

  $scope.division = function($scope){
    var a = this.num1, b = this.num2, result = a / b;
    alert(result);
  }


});
