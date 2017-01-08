var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.devServer = {};

// Karma configuration
// Generated on Mon May 11 2015 14:13:57 GMT-0600 (MDT)
module.exports = function(config) {
    var babelMoreOptions = { presets: 'es2015' };

    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "./test/**/*.test.js"
        ],
        preprocessors: {
            "./test/**/*.test.js": ["webpack", "sourcemap"]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            require("karma-webpack"),
            require("karma-sourcemap-loader"),
            require("karma-jasmine"),
            require("karma-chrome-launcher")
        ],
        reporters: ["dots"],
        coverageReporter: {
            // configure the reporter to use isparta for JavaScript coverage
            // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
            instrumenters: { isparta : require('isparta') },
            instrumenter: {
                '**/*.js': 'isparta'
            },
            instrumenterOptions: {
                isparta: { babel : babelMoreOptions }
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false
    });
};