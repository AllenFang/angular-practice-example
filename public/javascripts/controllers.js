'use strict';

angular.module("myNgApp.controller", [])
	.controller("PortalController", function($scope, metaService){
		metaService.getExampleMeta().then(function(metas){
				$scope.examples = metas;
		});
	});