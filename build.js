'use strict';

var jadeify    = require('jadeify');
var path       = require('path')
  , fs         = require('fs')
  , browserify = require('browserify')
  , es6ify     = require('es6ify')
  , jsRoot     = path.join(__dirname, 'dest')
  , bundlePath = path.join(jsRoot, 'index.js')
  ;

browserify({ debug: true })
  .add(es6ify.runtime)
  // .transform(jadeify)
  .transform(es6ify)
  .require(require.resolve('./index.js'), { entry: true })
  .require(require.resolve('./other.js'), { entry: true })
  .bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(fs.createWriteStream(bundlePath));
