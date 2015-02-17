'use strict';

angular.module("myNgApp.service", [])
	.factory("metaService", function($q, $http){
		var _url = "exampleMeta.json";
		return{
			getExampleMeta: function(){
				var deferred = $q.defer(); 
				// return $http.get(_url).then(function(result){
				// 	return result.data;
				// });
				$http.get(_url).success(function (data) { 
		            deferred.resolve(data); 
		          });
				return( deferred.promise );
			}
		};
	});