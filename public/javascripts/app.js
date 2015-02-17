'use strict';

angular.module("myNgApp", [
	'ngRoute', 
	'myNgApp.controller',
	'myNgApp.directive', 
	'myNgApp.service'
]).config(function($routeProvider){
	$routeProvider.when("/", {templateUrl: "/partials/portal.html", controller: "PortalController"})
});