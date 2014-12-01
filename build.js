'use strict';

var path       = require('path')
  , fs         = require('fs')
  , browserify = require('browserify')
  , es6ify     = require('es6ify')
  , bundlePath = path.resolve('./dest/index.js')
;

browserify({ debug: true })
  .add(es6ify.runtime)
  .transform(es6ify)
  .add(require.resolve('./src/index.js'))
  .bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(fs.createWriteStream(bundlePath))
;
