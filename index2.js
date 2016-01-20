var express = require('express');
var app = express();
var someModule = require('./module2');
var n = 1;

app.use(function(req, res, next) {
  req.num = n++;
  console.log('middleware 1: ' + req.num);
  next();
});

app.get('/', function (req, res) {
  console.log('route: ' + req.num);
  someModule(req);
  res.end('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});