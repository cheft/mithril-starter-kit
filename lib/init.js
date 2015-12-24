var m = require('mithril');

if (typeof window == 'undefined') {
  var nodeRequire = require;
  m.request = nodeRequire('request-promise').defaults({json:true});
  m.isClient = false;
  global.m = m;
} else {
  m.isClient = true;
  window.m = m;
}
