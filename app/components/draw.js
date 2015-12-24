var m = require('mithril');

var hello = {
  controller: function() {
    var ctrl = {
      name: 'world',
      inputName: function(e) {
        ctrl.name = this.value;
        // m.redraw.strategy('diff'); //all  none
        setTimeout(function() {
          ctrl.name = 'not auto draw 11111';
          // m.startComputation();
          ctrl.age = '22';
          // m.endComputation();
          m.redraw();
        }, 3000);
      }
    };
    return ctrl;
  },
  view: function(ctrl) {
    return m('div', [
      m('input', {oninput: ctrl.inputName, value: ctrl.name}),
      m('h2', 'Hello ' + ctrl.name, ' , age is ' + ctrl.age)
    ])
  }
};

m.mount(document.body, hello);
