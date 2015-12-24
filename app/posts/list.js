var Post = require('./model');

module.exports = {
  view: function(scope) {
    var list = scope.data || [];
    return (
      <div>
        {list.map(function(item) {return (
        <div>
          <h1>{item.title()}</h1>
          <div>author: {item.author()} <div style="float: right;">
            <a href="javascript:;" onclick={Post.remove.bind(scope, item.id())}>删除</a></div>
          </div>
          <p>
            {item.content()}
          </p>
        </div>
        )})}
      </div>
    )
  },

  controller: function(params, done) {
    var scope = {

      fetch: function() {
        Post.list().then(function(data) {
          scope.data = data;
          done && done(scope);
        })
        return scope;
      }
    };

    return scope.fetch();
  }
};
