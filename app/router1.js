var m = require('mithril');
//a menu template
var menu = function() {
  return m('div', [
    m('a[href="/"]', {config: m.route}, 'Home'),
    m('a[href="/contact"]', {config: m.route}, 'Contact'),
    //an expensive-to-initialize DOM element
    m('span', {config: persistent})
  ])
};

//a configuration that persists across route changes
function persistent(el, isInit, context) {
  context.retain = true

  if (!isInit) {
      //only runs once, even if you move back and forth between `/` and `/contact`
      // doSomethingExpensive(el)
  }
}

//components that use the menu above
var Home = {
  controller: function() {},
  view: function() {
    return m('div', [
      menu(),
      m('h1', 'Home')
    ])
  }
};

var Contact = {
  view: function() {
    return m('div', [
      menu(),
      m('h2', 'Contact')
    ])
  }
};

m.route.mode = 'hash';

m.route(document.body, '/', {
  '/': Home,
  '/contact': Contact
})
