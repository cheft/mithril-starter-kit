window.m = require('mithril');
var routes = require('../app/routes');

m.isClient = true;

window.onload = function() {
  m.route.mode = 'pathname';
  m.route(document.body, '/', routes);
};

m.isModern = function() {
  var agent = navigator.userAgent.toLowerCase();
  var regStr_ie = /msie [\d.]+;/gi ;
  if(agent.indexOf('msie') > 0) {
    if (agent.match(regStr_ie) > 9) {
      return true;
    }
    return false;
  }
  return true;
}
