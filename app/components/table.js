var m = require('mithril');
require('./table.css');

var table = {
  view: function(ctrl) {
    return (
      <div>
        <div><button onclick={ctrl.add}>add</button> <button onclick={ctrl.batchAdd}>batchAdd</button> <span config={ctrl.config}>{new Date().getTime() - ctrl.time} ms</span></div>
        <table>
          <tr>
            <th><a href="javascript:;" onclick={ctrl.sort}>name</a></th>
            <th>age</th>
            <th>actions</th>
          </tr>
          {ctrl.users.map(function(user, index) { return (
          <tr>
            <td>{user.name}</td>
            <td style={user.age > 150 ? 'color: red;' : '' }>{user.age > 150 ? user.age + '岁，已经成神了' : user.age}</td>
            <td><a href="javascript:;" onclick={ctrl.remove.bind(ctrl, index)}>&times;</a></td>
          </tr>
          )})}
        </table>
      </div>
    )
  },

  controller: function() {
    var ctrl = {
      time: new Date().getTime(),
      users: [
        {name: 'cheft', age: 0}
      ],

      config: function(el, isInit) {
        ctrl.time = new Date().getTime();

      },

      add: function() {
        var len = ctrl.users.length;
        ctrl.users.unshift({name: 'cheft' + len, age: len});
      },

      batchAdd: function() {
        for (var i = 0; i < 9999; i++) {
          ctrl.users.unshift({name: 'cheft' + i, age: i});
        }
      },

      remove: function(index) {
        ctrl.users.splice(index, 1);
      },

      sort: function() {
        ctrl.users = ctrl.users.reverse();
      }
    };
    return ctrl;
  }
};

// m.mount(document.body, table);
module.exports = table;
