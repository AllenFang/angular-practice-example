describe("Controller Test", function(){
     var mockScope = {};
     var controller = null;

     //Loading our module 'demoApp'
     beforeEach(angular.mock.module("demoApp"));

     //Using angular.mock.inject to resolve dependency
     beforeEach(angular.mock.inject(function($controller, $rootScope){
         //create a mock scope object by $rootScope
         mockScope = $rootScope.$new();
         //create a controller object by $controller
         controller = $controller("SampleCtrl", {
              $scope: mockScope
         });
     }));

     it("The Counter initial value should be 1", function(){
         expect(mockScope.counter).toEqual(1);
     });

     it("Increase counter, result will be 2", function(){
         mockScope.add();
         expect(mockScope.counter).toEqual(2);;
     });

     it("Decrease counter, result will be 0", function(){
         mockScope.minus();
         expect(mockScope.counter).toEqual(0);;
     });
});