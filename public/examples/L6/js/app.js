'use strict';

angular.module("demoApp", [])
	.controller("YearController", function($scope){
		$scope.years = [
			"2015",
			"2014",
			"2013",
			"2012"
		];
		$scope.selectYear = $scope.years[2];
		$scope.changeYear = function(){
			alert("YearController say... " + $scope.selectYear);
		}
	})
	.directive("mySelect", function(){
		return{
			scope:{
				items: "="
			},
			require: ['?ngModel'],
			templateUrl: "selectTemplate.html",
			link: function(scope, el, attr, ctrl){
				var ngModelCtrl = ctrl[0];
				var defaulrShowText = angular.isDefined(attr.showText)?attr.showText:"DropDown";
				ngModelCtrl.$render = function(){
					if(angular.isDefined(scope.selected))
						ngModelCtrl.$setViewValue(scope.selected);
					_changeShowText(ngModelCtrl.$viewValue);
				}

				_changeShowText(defaulrShowText);
				
				scope.selectItem = function(item){
					scope.selected = item;					
					ngModelCtrl.$render();
				};

				function _changeShowText(text){
					scope.showText = text != null?text:defaulrShowText;
				}
			},
			restrict: "E"
		};
	});