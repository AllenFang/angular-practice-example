'use strict';

angular.module("demoApp", [])
	.directive("loginForm", function(){
		return{
			scope:{
				doLogin:"&",
			},
			link: function(scope, el, attrs){
				scope.submit = function(){
					scope.doLogin({
						user:{
							email: scope.mail,
							password: scope.pwd, 
							remenber: scope.remenber
						}
					});
				}
			},
			templateUrl: "formTemplate.html", 
			restrict: "E"
		};
	}).controller("LoginController", function($scope){
		$scope.login = function(user){
			console.log(user);
		}
	})