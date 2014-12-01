'use strict';

/**
 * Dependencies
 */
var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var regenerator = require('gulp-regenerator');
var jadeify     = require('jadeify');


gulp.task('default', function() {
  gulp.src('index.js')
    .pipe(browserify({ debug: true }))
    .on('prebundle', function(bundle) {
      bundle
        .transform(jadeify)
        .add('./third.js')
      ;
    })
    .on('error', function(e) { console.log(e); })
    .pipe(regenerator())
    .pipe(gulp.dest('dest'))
  ;
});
