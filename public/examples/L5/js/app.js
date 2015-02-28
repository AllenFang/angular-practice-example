'use strict';

angular.module("demoApp", [])
     .controller("SampleCtrl", function($scope){
         $scope.counter = 1;
        
         $scope.add = function(){
             $scope.counter++;
         };
    
         $scope.minus = function(){
             $scope.counter--;
         };

});