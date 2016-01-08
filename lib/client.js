window.m = require('mithril');
var routes = require('../app/routes');

m.isClient = true;

window.onload = function() {
  m.route.mode = 'pathname';
  m.route(document.body, '/', routes);
};

m.isModern = function() {
  var regStr_ie = /msie [\d.]+;/gi ;
  if(navigator.userAgent.indexOf("msie") > 0) {
    if (navigator.userAgent.match(regStr_ie) > 9) {
      return true;
    }
    return false;
  }
  return true;
}
