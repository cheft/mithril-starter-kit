var fs = require('fs');
var path = require('path');
var express = require('express');
// var bodyParser = require('body-parser');
var m = require('mithril');
var msx = require('msx');

require.extensions['.js'] = function(module, filename, a) {
  var src = msx.transform(fs.readFileSync(filename, 'utf8'))
  module._compile(src, filename)
};

require.extensions['.css'] = function(module, filename, a) {
  module._compile('{}', filename);
};


var app = express();

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

var options = {
  dotfiles: 'ignore',
  etag: false,
  // extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  setHeaders: function (res, path) {
    res.set('x-timestamp', Date.now());
  }
};

app.use(express.static('public', options));

module.exports = app;
