var Post = require('./model');

module.exports = {
  view: function(scope) {
    var list = scope.data;
    return (
      <div>
        <div><input type="hidden" oninput={m.withAttr('value', scope.attr.bind(scope, 'id'))} value={scope.contact.id}/>
        <input style="width: 100%;" oninput={m.withAttr('value', scope.attr.bind(scope, 'title'))} value={scope.contact.title}/></div>
        <div><textarea style="width: 100%;" rows="10" oninput={m.withAttr('value', scope.attr.bind(scope, 'content'))} value={scope.contact.content}></textarea></div>
        <div><button onclick={scope.save}>{scope.contact.id ? '保存' : '发表'}</button></div>
      </div>
    )
  },

  controller: function(params) {
    var scope = {
      contact: new Post(),
      attr: function(prop, value) {
        scope.contact[prop] = value;
      },
      save: function() {
        Post.save(scope.contact);
        scope.contact = new Post();
        Post.trigger('list');
      }
    };

    Post.on('edit', function(contact) {
      scope.contact = contact;
    });

    return scope;
  }
};
