var config = require('../config');
var observable = require('../../lib/observable');

var Post = function(data) {
  var data = data || {};
  this.id = m.prop(data.id || '');
  this.title = m.prop(data.title || '');
  this.content = m.prop(data.content || '');
  this.author = m.prop(data.author || 'cheft');
};

Post.list = function() {
  return m.request({method: 'GET', url: config.dbPrefix + 'posts', type: Post});
};

Post.save = function(data) {
  if (data.id()) {
    return m.request({method: 'PUT', url: config.dbPrefix + 'posts/' + data.id(), data: data});
  }
  return m.request({method: 'POST', url: config.dbPrefix + 'posts', data: data});
};

Post.remove = function(id) {
  return m.request({method: 'DELETE', url: config.dbPrefix + 'posts/' + id}).then(Post.trigger.bind(Post, 'list'));
};

Post.get = function(id) {
  return m.request({method: 'GET', url: config.dbPrefix + 'posts/' + id, type: Post});
};

module.exports = observable(Post);
