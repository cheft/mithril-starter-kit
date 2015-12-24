window.m = require('mithril');
var routes = require('../app/routes');

m.isClient = true;

window.onload = function() {
  m.route.mode = 'pathname';
  m.route(document.body, '/', routes);
};
