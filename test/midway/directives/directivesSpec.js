//
// test/midway/directives/directivesSpec.js
//
describe("Midway: Testing Directives", function() {

  var test, $injector;

  before(function(done) {
    ngMidwayTester.register('testApp', function(instance) {
      test = instance;
      done();
    });
  });

  before(function() {
    $injector = test.$injector;
  });

  it("should properly update the input if we change the data (bound to backbone events)", function(done) {
    
    var $timeout = $injector.get("$timeout");

    var html = '<input type="text" ng-model="name" bb-model="model" />';

    var $scope = test.scope();
    $scope.model = new Backbone.Model();

    var element = angular.element(html);

    test.directive(element, $scope, function(element) {
      
      setTimeout(function(){
        $scope.model.set('name', 'Nick');

        setTimeout(function(){
          expect(element.val()).to.equal("Nick");
          done();
        }, 100);    

      }, 1000);
    });
  });

});
