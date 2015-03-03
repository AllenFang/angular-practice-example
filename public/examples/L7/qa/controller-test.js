describe("Controller Test", function(){
     var mockScope = {};
     var controller = null;

     beforeEach(angular.mock.module("demoApp"));

     beforeEach(angular.mock.inject(function($controller, $rootScope, $injector){
         mockScope = $rootScope.$new();
         controller = $controller("SampleCtrl", {
              $scope: mockScope,
              SampleService: $injector.get("SampleService")
         });
     }));


     it("The echo function should return 'Hello {name}'", function(){
         var name = "Allen";
         mockScope.name = name;
         mockScope.echo(name);
         expect(mockScope.name).toEqual("Hello "+name);
     });

});