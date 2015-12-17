var m = require('mithril');
var app = {};

app.hello = {
  controller: function() {
    var ctrl = {
      name: 'world',
      inputName: function(e) {
        ctrl.name = this.value;
      }
    };
    return ctrl;
  },
  view: function(ctrl) {
    return m('div', [
      m('input', {oninput: ctrl.inputName, value: ctrl.name}),
      m('h2', 'Hello ' + ctrl.name)
    ])
  }
};

app.hello2 = {
  controller: function() {
    var _this = this;
    this.name = m.prop('cheft');
    this.inputName = function(e) {
      _this.name(this.value);
    }
  },
  view: function(ctrl) {
    return m('div', [
      m('input', {oninput: ctrl.inputName, value: ctrl.name()}),
      m('h2', 'Hello ' + ctrl.name())
    ])
  }
};

var viewport = {
  controller: function() {
    var path = m.route.param('path');
    if (!path) {
      path = 'hello'
    }
    return {path: path};
  },
  view: function(ctrl) {
    return m('ul', [
      m('li', m('a', {config: m.route, href: '/'}, 'Home')),
      m('li', m('a', {config: m.route, href: '/hello2'}, 'Hello')),
      m('div', app[ctrl.path])
    ])
  }
};

m.route(document.body, '/', {
    '/': viewport,
    '/:path': viewport
});
