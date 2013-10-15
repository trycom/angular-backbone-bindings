'use strict';

var app = angular.module('testApp', ['angularBackboneBindings']);

app.run(function($rootScope, $timeout){
	$rootScope.model = new Backbone.Model();
	$rootScope.colors = ['blue', 'white', 'red'];
});