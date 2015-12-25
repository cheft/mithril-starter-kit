var config = require('../config');
var Menu = require('../common/menu');
var NProgress = require('NProgress');

module.exports = {
  view: function(scope) {
    var profile = scope.data;
    return (
      <div config={scope.renderComplete}>
        <Menu />
        <h1>{profile.name}</h1>
        <h3>{profile.email}</h3>
      </div>
    )
  },

  controller: function(params, done) {
    m.isClient && NProgress.start();
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