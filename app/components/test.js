var m = require('mithril');

var items = [];
for (var i = 0; i < 9999; i++) {
  items.push('cheft' + i);
}


var Hhh = {
  controller: function(opts) {
    console.log(opts);
  },

  view: function(ctrl) {
    return (
      <h1>这是个性能测试 Demo</h1>
    )
  }
}

var test = {
  view: function(ctrl) {
    return (
      <div>
        <Hhh name="aa" obj={{a: 'aa', b: 1, c: true}}></Hhh>
        <div>
          <button onclick={ctrl.sort}>reverse</button>
          <span config={ctrl.config}>{new Date().getTime() - ctrl.time} ms</span>
        </div>
        <ul>
          {ctrl.items.map(function(item) {
            return (<li>{item}</li>)
          })}
        </ul>
      </div>
    )
  },

  controller: function() {
    var ctrl = {
      time: new Date().getTime(),
      items: items,

      config: function(el, isInit) {
        ctrl.time = new Date().getTime();
      },

      sort: function() {
        ctrl.items = ctrl.items.reverse();
      }
    };
    return ctrl;
  }
};

m.mount(document.body, test);
