var marked = require('marked');
var config = require('../config');
var observable = require('../../lib/observable');

var Post = function(data) {
  var data = data || {};
  this.id = data.id || '';
  this.title = data.title || '';
  this.content = data.content || '';
  this.html = data.html || '';
  this.author = data.author || 'cheft';
};


Post.list = function() {
  return m.request({method: 'GET', url: config.dbPrefix + 'posts?v=' + (new Date()).getTime()});
};

Post.save = function(data) {
  data.html = marked(data.content);
  if (data.id) {
    return m.request({method: 'PUT', url: config.dbPrefix + 'posts/' + data.id, data: data});
  }
  return m.request({method: 'POST', url: config.dbPrefix + 'posts', data: data});
};

Post.remove = function(id) {
  return m.request({method: 'DELETE', url: config.dbPrefix + 'posts/' + id});
};

module.exports = observable(Post);
