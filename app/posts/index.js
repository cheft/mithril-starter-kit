var config = require('../config');
var Menu = require('../common/menu');
var NProgress = require('NProgress');

module.exports = {
  view: function(scope) {
    // var list = scope.data.result.expertRecommendList;
    return (
      <div>
        <Menu />
        {scope.data.map(function(item) {return (
        <div>
          <h1>{item.title}</h1>
          <div>author: {item.author}</div>
          <p>
            {item.content}
          </p>
        </div>
        )})}
      </div>
    )
  },

  controller: function(params, done) {
    var scope = {};
    !m.isServer && NProgress.start();
    m.request({
      url: config.dbPrefix + 'posts',
    }).then(function(data) {
      scope.data = data;
      done && done(scope);
      !m.isServer && NProgress.done();
    });
    return scope;
  }
};
