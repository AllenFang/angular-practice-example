'use strict';

angular.module("demoApp", [])
	.controller("ProductController", function($scope){
		$scope.currPage = 3;
		$scope.numPerPage = 5;
		$scope.products = [];
		for(var i=0;i<50;i++){
			$scope.products[i] = "Product " + i;
		}

		$scope.changeProduct = function(){
			console.log($scope.currPage);
			var begin = (($scope.currPage - 1) * $scope.numPerPage),
    		     end = begin + $scope.numPerPage;
    
   		 	$scope.filteredProducts = $scope.products.slice(begin, end);
		};
		$scope.changeProduct();
	})
	.controller("PaginationController", function($scope, $element, $attrs){
		var self = this,
			ngModelCtrl;
		this.init = function(ngModelCtrl_){
			ngModelCtrl = ngModelCtrl_;
			ngModelCtrl.$render = function(){
				self._changePagationState();
				self.render();
			}
			$scope.totalPages = Math.ceil(
				$scope.itemSize/parseInt($attrs.numPerPage));
		};

		this._changePagationState = function(){
			$scope.page = parseInt(ngModelCtrl.$viewValue) || 1;
			$scope.showFirst = $scope.page == 1?false:true;
			$scope.showLast = $scope.page == $scope.totalPages?false:true;
		}

		$scope.selectPage = function(page){
			ngModelCtrl.$setViewValue(page);
			ngModelCtrl.$render();
		};
	})
	.directive("pagination", function(){
		return{
			scope:{
				itemSize: "@"
			},
			restrict: "E",
			require: ['pagination', '?ngModel'],
			controller: "PaginationController", 
			templateUrl: "paginationTemplate.html",
			link: function(scope, el, attr, ctrls){
				var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
				var pageSize = parseInt(attr.pageSize);

				paginationCtrl.init(ngModelCtrl);

				paginationCtrl.render = function(){
					scope.pages = getPageList();
				};

				function getPageList(){
					var half    = Math.floor(pageSize/2),
						isAlign = pageSize%2==1,
						pages   = [createPage(scope.page, true)],
						flag    = scope.page,
						windows = half,
						stopPoint;

					while(flag-1 > 0 && windows > 0){
						pages.push(createPage(--flag, false));
						windows--;
					}
					stopPoint = flag;
					flag = scope.page;
					windows += isAlign?half:half-1;

					while(flag+1 <= scope.totalPages && windows > 0){
						pages.push(createPage(++flag, false));
						windows--;
					}
					while(windows > 0){
						pages.push(createPage(--stopPoint, false));
						windows--;
					}
					return pages.sort(function(a, b){
						return a.text-b.text
					});
				}

				function createPage(page, active){
					return{
						text: page,
						active:active
					};
				}
			}
		};
	})