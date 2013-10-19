'use strict';

var app = angular.module('angularBackboneBindings', []);

app.directive('bbModel', function($timeout) {
  return {
    require: 'ngModel',
    // scope:{
    //   bbModel: "="
    // },
    link: function(scope, elem, attrs, ngModel) {

        var attrToSet = attrs.ngModel;
        var model = scope[attrs.bbModel];


        if (!model) {
          throw new Error(attrs.bbModel + ' not found on the scope.');
        }

        if (!attrToSet) {
          throw new Error('You need to specify which bb-attr you want to set');
        }

        $timeout(function(){  
          if (model.get(attrToSet)) {
            elem.val(model.get(attrToSet));
          }
        }, 0);

        // Push a new parser that we'll use to set the value read from the DOM to our backbone model
        ngModel.$parsers.push(function(domValue){
          model.set(attrToSet, domValue);
          return true;
        });

        // Listen on model change for this particular attribute to update the dom
        model.on('change:' + attrToSet, function(model){
          $timeout(function(){
            elem.val(model.get(attrToSet));
          });
        });

        // Avoid memory leaks
        scope.$on('$destroy', function(){
          model.off('change:'+attrToSet);
        });


    }
  };
});