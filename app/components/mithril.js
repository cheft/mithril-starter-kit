var m = require('mithril');

var Page = {
  list: function() {
    return m.request({method: "GET", url: "http://mithril.js.org/pages.json"});
  }
};

var Demo = {
  //controller
  controller: function() {
    var pages = Page.list();
    return {
      pages: pages,
      rotate: function() {
        pages().push(pages().shift());
      }
    }
  },

  //view
  view: function(ctrl) {
    return m("div", [
      ctrl.pages().map(function(page) {
        return m("a", {href: page.url}, page.title);
      }),
      m("button", {onclick: ctrl.rotate}, "Rotate links")
    ]);
  }
};

module.exports = Demo;
// m.mount(document.body, Demo);
