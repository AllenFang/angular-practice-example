describe("Service Test", function(){
     var mockService;

     // mock our module
     beforeEach(angular.mock.module("demoApp"));

     // mock service object
     beforeEach(angular.mock.inject(function($injector){
          // using $injector retrieve object instances as defined by provider
          mockService = $injector.get("SampleService");
     }));

     it("The echo function should return 'Hello {name}'", function(){
         var name = "Allen";
         expect(mockService.echo(name)).toEqual("Hello "+name);
     });

});