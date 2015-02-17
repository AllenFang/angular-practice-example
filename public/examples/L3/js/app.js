'use strict';

angular.module("demoApp", [])
	.directive("productContainer", function(){
		return{
			scope:{
				data: "="
			},
			templateUrl: "productsTemplate.html",
			link: function(scope, el, attr){
				scope.splitSize = parseInt(attr["splitSize"]);
			},
			restrict: "AE"
		};
	}).directive("productRow", function(){
		return{
			scope: {},
			templateUrl: "productRowTemplate.html", 
			link: function(scope, el, attr){
				console.log(attr.rowData);
				scope.data = scope.$eval(attr.rowData);
			},
			restrict: "E"
		};
	}).controller("ProductController", function($scope, $http){
		$scope.products = [
			{name: "amarta"},
			{name: "emart"},
			{name: "faatpranni"},
			{name: "innovatinn"},
			{name: "planning"},
			{name: "imart"},
			{name: "ForGG"},
			{name: "Go Green"},
			{name: "F-5"},
			{name: "SURBIH"}
		];
	});