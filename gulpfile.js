'use strict';

/**
 * Dependencies
 */
var gulp        = require('gulp');
var regenerator = require('gulp-regenerator');
var jadeify     = require('jadeify');
var es6ify      = require('es6ify');
var browserify  = require('browserify');
var fs          = require('fs');


gulp.task('default', function() {
  browserify({ debug: true })
    .add(es6ify.runtime)
    .transform(es6ify)
    .transform(jadeify)
    .require('./third.js', { entry: true })
    .bundle()
    .pipe(fs.createWriteStream('./dest/index.js'));
});
