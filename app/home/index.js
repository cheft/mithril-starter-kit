var NProgress = require('NProgress');
var Navigator = require('../common/navigator');
var Diff = require('./diff');
var Banner = require('./banner');
var Flow = require('./flow');
var Model = require('./model');

module.exports = {
  view: function (scope) {
    return (
      <div>
        <Navigator />
        <Banner />
        <Flow flows={scope.data.flows} />
        <Diff diffs={scope.data.diffs} />
      </div>
    )
  },

  controller: function (params, done) {
    var scope = {
      onunload: function () {
        Model.off('*');
      }
    };
    Model.list();

    Model.on('list', function(data) {
      scope.data = data;
      done && done(scope);
    });

    return scope;
  }
}
