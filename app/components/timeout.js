var m = require('mithril');

var test = {};
test.controller = function(params, done) {
  var scope = {};
  console.log(params, done);
  setTimeout(function() {
    scope.name = 'dog';
    m.redraw();
  }, 2000);
  return scope;
}

test.view = function(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', 'Ohh, another page'),
    m('p', 'try to realod and look to the response'),
    m('a', {
      href: '/',
      config: m.route
    }, 'back to home page'),
    m('p', 'My dogs name is ' + scope.name)
  ];
}


m.mount(document.body, test);


// module.exports = {
//   controller: controller,
//   view: view
// };
