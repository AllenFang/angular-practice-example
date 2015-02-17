'use strict';

angular.module("myNgApp.directive", [])
	.directive("examplePanel", function(){
		return {
			scope: {
				data: "="
			},
			templateUrl: "/templates/examplePanelTemplate.html",
			link: function(scope, el, attr){
				scope.columnSize = parseInt(attr["columnSize"]);
			}, 
			restrict: "E"
		};
	})
	.directive("exampleRow", function(){
		return {
			scope:{},
			templateUrl: "/templates/exampleRowTemplate.html", 
			link: function(scope, el, attr){
				scope.data = scope.$eval(attr.rowData);
			}, 
			restrict: "E"
		};
	});