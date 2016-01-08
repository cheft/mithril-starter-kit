var config = require('../config');
var Menu = require('../common/menu');
var NProgress = require('NProgress');

module.exports = {
  view: function(scope) {
    var profile = scope.data;
    return (
      <div config={scope.renderComplete}>
        <Menu />
        <div className="status">{profile.name}</div>
        <h3 className="content">{profile.email}</h3>
      </div>
    )
  },

  controller: function(params, done) {
    if (m.isClient) {
      document.title = '关于我';
      NProgress.start();
    }

    var scope = {
      renderComplete: function(el, isInit) {
        !isInit && m.isClient && NProgress.done();
      }
    };
    m.request({
      url: config.dbPrefix + 'profile'
    }).then(function(data) {
      scope.data = data;
      done && done(scope);
    });
    return scope;
  }
}