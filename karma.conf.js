module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'src/app/*.spec.js',
      'src/app/*.js'
    ],
    reporters: ['dots']
  });
};