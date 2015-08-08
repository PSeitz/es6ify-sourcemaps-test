//Starting dev server

var express = require('express');
var app = express();

app.use("/", express.static(__dirname + '/dest'));

app.listen(80);
