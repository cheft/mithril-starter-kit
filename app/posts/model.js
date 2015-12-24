var config = require('../config');

var Post = function(data) {
  var data = data || {};
  this.id = m.prop(data.id || '');
  this.title = m.prop(data.title || '');
  this.content = m.prop(data.content || '');
  this.author = m.prop(data.author || 'cheft');
};

Post.list = function(data) {
  return m.request({method: 'GET', url: config.dbPrefix + 'posts', type: Post});
};

Post.save = function(data) {
  return m.request({method: 'POST', url: config.dbPrefix + 'posts', data: data});
};

Post.remove = function(id) {
  return m.request({method: 'DELETE', url: config.dbPrefix + 'posts/' + id});
};

Post.get = function(id) {
  return m.request({method: 'GET', url: config.dbPrefix + 'posts/' + id, type: Post});
};

Post.update = function(data) {
  return m.request({method: 'PUT', url: config.dbPrefix + 'posts/' + data.id, data: data});
};

module.exports = Post;
