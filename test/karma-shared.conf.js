var shared = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
  });
};

shared.files = [
  'test/mocha.conf.js',

  //3rd Party Code
  'components/angularjs/index.js',
  'components/lodash/dist/lodash.js',
  'components/backbone/backbone.js',

  //App-specific Code
  'app/angular-backbone-bindings.js',
  'app/app.js',

  //Test-Specific Code
  'node_modules/chai/chai.js',
  'test/lib/chai-should.js',
  'test/lib/chai-expect.js'
];

module.exports = shared;
