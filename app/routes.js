var posts = require('./posts');
var analysis = require('./analysis');
var exposure = require('./exposure');

module.exports = {
  '/': posts,
  '/analysis': analysis,
  '/exposure': exposure
};
