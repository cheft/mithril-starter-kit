var NProgress = require('NProgress');
var Menu = require('../common/menu');
var Form = require('./form');
var Post = require('./model');

module.exports = {
  view: function(scope) {
    var list = scope.data || [];
    return (
      <div config={scope.renderComplete}>
        <Menu /><Form />
        <div>
          {list.map(function(item) {return (
          <div>
            <h1 className="title">{item.title}</h1>
            <div className="status">author: {item.author} <div style="float: right;">
              <a href="javascript:;" onclick={Post.trigger.bind(Post, 'fill', item)}>编辑</a> |
              <a href="javascript:;" onclick={scope.remove.bind(scope, item.id)}>删除</a></div>
            </div>
            <div className="content">
              <div config={scope.renderHtml} html={item.html}></div>
            </div>
          </div>
          )})}
        </div>
      </div>
    )
  },

  controller: function(params, done) {
    if (m.isClient) {
      document.title = '我的博客';
      m.isModern() && NProgress.start();
    }

    var scope = {
      renderComplete: function(el, isInit) {
        !isInit && m.isModern() && NProgress.done();
      },

      renderHtml: function(el, isInit, cxt, vdom) {
        /**
         * IE 中，m.trust(item.html) 经常脚本无响应, 此方式的 innerHTML 亦无效
         * 所以使用 outerHTML， 但 .content 里面的 div 是会替换掉的
         */
        if (!isInit) {
          vdom.nodes[0].outerHTML = vdom.attrs.html;
        }
      },

      remove: function(id) {
        Post.remove(id).then(function() {
          Post.trigger('fill', new Post());
          Post.trigger('list');
        })
      },

      onunload: function() {
        Post.off('*');
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
