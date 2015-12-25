var posts = require('./posts');
var aboutme = require('./aboutme');
var analysis = require('./analysis');
var exposure = require('./exposure');

module.exports = {
  '/': posts,
  '/aboutme': aboutme,
  '/analysis': analysis,
  '/exposure': exposure
};
