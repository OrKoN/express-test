var express = require('express');
var app = express();
var someModule = require('./module');
var createNamespace = require('continuation-local-storage').createNamespace;
var context = createNamespace('request-context');

var n = 1;

app.use(function(req, res, next) {
  context.bindEmitter(req);
  context.bindEmitter(res);
  return context.run(function() {
    next();
  });
});


app.use(function(req, res, next) {
  context.set('num', n++);
  console.log('middleware 1: ' + context.get('num'));
  next();
});

app.get('/', function (req, res) {
  console.log('route: ' + context.get('num'));
  someModule();
  res.end('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});