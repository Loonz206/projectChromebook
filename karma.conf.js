//karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.js',
      'src/app/**/*.spec.js',
      'src/app/*.js'
    ],
    reporters: ['dots']
  });
};