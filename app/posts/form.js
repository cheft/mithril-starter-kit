var Post = require('./model');

module.exports = {
  view: function(scope) {
    var list = scope.data;
    return (
      <div>
        <div><input style="width: 100%;" oninput={m.withAttr('value', scope.contact.title)}/></div>
        <div><textarea style="width: 100%;" rows="10" oninput={m.withAttr('value', scope.contact.content)}></textarea></div>
        <div><button onclick={scope.save}>发表</button></div>
      </div>
    )
  },

  controller: function(params) {
    var scope = {
      contact: new Post(),

      save: function() {
        Post.save(scope.contact).then(function(data) {
        })
      }
    };
    return scope;
  }
};
