// Karma configuration
// Generated on Fri Nov 17 2017 15:19:59 GMT-0500 (EST)

module.exports = function (config) {
  'use strict';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jquery-1.11.1'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'assets/javascripts/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jquery',
      'karma-ng-html2js-preprocessor'
    ],

    // preprocessors to use
    preprocessors: {
      'lib/assets/javascripts/**/**/*.html': ['ng-html2js']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
    // || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Allow remote debugging when using PhantomJS.
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        debug: true,
      }
    },

    ngHtml2JsPreprocessor: {
      cacheIdFromPath: function(filepath) {
        // if (filepath.startsWith('app/assets/javascripts/')) {
        //   return filepath.split('app/assets/javascripts/').pop();
        // }
        //
        // if (filepath.startsWith('lib/assets/javascripts/')) {
        //   return filepath.split('lib/assets/javascripts/').pop();
        // }
      },
      moduleName: 'templates'
    }
  });
};
