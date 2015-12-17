//karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
    //Load the scripts and or files needed to run the tests
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.js',
      'src/app/**/*.spec.js',
      'src/app/*.js'
    ],
    reporters: ['dots']
  });
};