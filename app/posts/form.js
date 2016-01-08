var Post = require('./model');

module.exports = {
  view: function(scope) {
    var list = scope.data;
    return (
      <div>
        <div><input type="hidden" value={scope.contact.id}/>
        <input onkeyup={m.withAttr('value', scope.attr.bind(scope, 'title'))} value={scope.contact.title} placeholder="文章标题"/></div>
        <div><textarea rows="6" onkeyup={m.withAttr('value', scope.attr.bind(scope, 'content'))} value={scope.contact.content} placeholder="文章标题，支持 Markdown"></textarea></div>
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
        console.log(scope.contact);
        Post.save(scope.contact);
        Post.trigger('fill', new Post());
        Post.trigger('list');
      }
    };

    Post.on('fill', function(contact) {
      scope.contact = contact;
    });

    return scope;
  }
};
