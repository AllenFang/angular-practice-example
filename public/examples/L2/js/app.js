'use strict';

angular.module("demoApp", [])
	.directive("commentUpdateModal", function($rootScope){
		return{
			scope:{
				update: "&updateComment"
			},
			templateUrl: "commentUpdateTemplate.html", 
			restrict: "AE", 
			link: function(scope, el, attr){
				el.find("#saveBtn").bind("click", function(){
					scope.update({
						comment:{
							author: scope.author, 
							text: scope.comment
						}
					});
				});
			}, 
			controller: function($scope){
				$scope.comment = "";
				$rootScope.$on("DIRECTIVE_COMMENT_UPDATE", function(e,data){
					$scope.comment = data.text;
					$scope.author = data.author;
				});
			}
		};
	}).directive("commentList", function($compile){
		var listElmId = "commentList"
		return{
			scope:{
				comments: "@comments"
			},
			template: "<div id='"+listElmId+"' class='list-group'></div>",
			link: function(scope, el, attr, ctrl){
				var commentList = el.find("#"+listElmId);
				scope.data = scope.$eval(scope.comments);
				for(var i=0;i<scope.data.length;i++){
					var aLink = $compile("<a ng-click='startModal("+i+")'></a>")(scope);
					aLink.attr("href","#").addClass("list-group-item")
					     .attr("data-toggle", "modal").attr("data-target", "#commentModal");
					aLink.append(angular.element("<h4>")
						.addClass("list-group-item-heading").text(scope.data[i].author));
					aLink.append(angular.element("<p>")
						.addClass("list-group-item-text").text(scope.data[i].text));

					commentList.append(aLink);
				}
				scope.startModal = function(index){
					scope.$emit("DIRECTIVE_COMMENT_UPDATE", scope.data[index]);
				};
			}, 
			restrict: "A"
		};
	}).controller("CommentController", function($scope){
		$scope.data = {comments:[
			{text: "This is a Directive learning.", author: "Allen Fang"},
			{text: "This is a Comment List Directive implementation.", author: "Pete Brad"},
			{text: "Hi, I'am Ray!!!", author: "Kennith Ray"}
		]};

		$scope.updateComment = function(comment){
			// TODO
			// you can update comment here...
			alert("[alert from controller]..."+comment.author+" :  "+comment.text);
		};
	})