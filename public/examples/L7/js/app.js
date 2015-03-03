'use strict';

angular.module("demoApp", [])
    .controller("SampleCtrl", function($scope, SampleService){
     $scope.name = "";

     $scope.echo = function(){
         $scope.name = SampleService.echo($scope.name);
     };
   }).factory("SampleService", function(){
       return {
           echo: function(name){
               return "Hello " + name;
           }
       };

   });