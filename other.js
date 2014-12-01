'use strict';

exports.promise = new Promise(function (resolve) {
  setTimeout(function() {
    console.log('2');
    resolve();
  }, 2000);
});

exports.html = require('./tpl.jade')();
