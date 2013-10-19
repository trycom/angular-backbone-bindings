//
// test/e2e/directives/directivesSpec.js
//
describe("E2E: Testing Directives", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should refresh model when we input the field', function() {
    browser().navigateTo('#!/videos');
    input('name').enter('Nick');
    
    setTimeout(function(){
      expect(element('#printDiv').text()).toEqual("Nick");
    }, 100);
  });


});
