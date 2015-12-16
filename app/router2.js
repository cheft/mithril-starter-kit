var m = require('mithril');
var app = {};

app.home = {
  controller: function() {},
  view: function() {
    return m('div', [
      m('h1', 'Home Page')
    ])
  }
};

app.contact = {
  view: function() {
    return m('div', [
      m('h2', 'Contact Page')
    ])
  }
};

var viewport = {
  controller: function() {
    var path = m.route.param('path');
    if (!path) {
      path = 'home'
    }
    return {path: path};
  },
  view: function(ctrl) {
    return m('ul', [
      m('li', m('a[href="/"]', {config: m.route}, 'Home')),
      m('li', m('a[href="/contact"]', {config: m.route}, 'Contact')),
      m('div', app[ctrl.path])
    ])
  }
};

m.route.mode = 'hash';

m.route(document.body, '/', {
    '/': viewport,
    '/:path': viewport
});
