var NProgress = require('NProgress');
var Menu = require('../common/menu');
var Form = require('./form');
var Post = require('./model');

module.exports = {
  view: function(scope) {
    var list = scope.data || [];
    return (
      <div config={scope.renderComplete}>
        <Menu /><hr /><Form /><hr />
        <div>
          {list.map(function(item) {return (
          <div>
            <h1>{item.title}</h1>
            <div>author: {item.author} <div style="float: right;">
              <a href="javascript:;" onclick={Post.trigger.bind(Post, 'fill', item)}>编辑</a> |
              <a href="javascript:;" onclick={scope.remove.bind(scope, item.id)}>删除</a></div>
            </div>
            <p>
              {item.content}
            </p>
          </div>
          )})}
        </div>
      </div>
    )
  },

  controller: function(params, done) {
    m.isClient && NProgress.start();
    var scope = {
      renderComplete: function(el, isInit) {
        !isInit && m.isClient && NProgress.done();
      },

      remove: function(id) {
        Post.remove(id).then(function() {
          Post.trigger('fill', new Post());
          Post.trigger('list');
        })
      }
    };

    Post.on('list', function() {
      Post.list().then(function(data) {
        scope.data = data;
        done && done(scope);
      })
    });

    Post.trigger('list');
    return scope;
  }
};
