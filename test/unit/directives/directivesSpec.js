//
// test/unit/directives/directivesSpec.js
//
describe("Unit: Testing Directives", function() {

  var $compile, $rootScope, $timeout;

  beforeEach(module('testApp'));

  beforeEach(inject(
    ['$compile','$rootScope', '$timeout', function($c, $r, $t) {
      $compile = $c;
      $rootScope = $r;
      $timeout = $t;
      $rootScope.model = new Backbone.Model();
      $rootScope.model.set('name', 'Nick');
    }]
  ));


  it("should display the value of our data if its set", function() {

    var element = angular.element('<input type="text" ng-model="name" bb-model="model" />');
    var compiled = $compile(element);
    compiled($rootScope);
    $rootScope.$digest();
    $timeout.flush();

    expect(element.val()).to.equal("Nick");

  });

});
