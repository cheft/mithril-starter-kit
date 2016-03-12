var config = require('../config');
var observable = require('../../lib/observable');

var Model = function(data) {
  var data = data || {};
};

Model.list = function() {
  m.request({method: 'GET', url: config.dbPrefix + 'flows'}).then(function(flows) {
    m.request({method: 'GET', url: config.dbPrefix + 'diffs'}).then(function(diffs) {
      var data = { flows: flows, diffs: diffs };
      Model.trigger('list', data);
    });
  });
};

module.exports = observable(Model);
