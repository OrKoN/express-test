var getNamespace = require('continuation-local-storage').getNamespace;

module.exports = function() {
  var context = getNamespace('request-context');
  console.log('some module: ' + context.get('num'));
};