'use strict';

// Dependencies
var co = require('co');
var other = require('./other');

co(function * () {
  console.log(1);
  yield other.promise;
  console.log(other.html);
  console.log(4);
});
