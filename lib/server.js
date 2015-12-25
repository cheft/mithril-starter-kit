var fs = require('fs');
var path = require('path');
var express = require('express');
// var bodyParser = require('body-parser');
var render = require('mithril-node-render');
var m = global.m = require('mithril');
m.isServer = true;

var msx = require('msx');
var request = require('request-promise');

require.extensions['.js'] = function(module, filename, a) {
  var src = msx.transform(fs.readFileSync(filename, 'utf8'))
  module._compile(src, filename)
};

require.extensions['.css'] = function(module, filename, a) {
  module._compile('{}', filename);
};

var routes = require('../app/routes');

// json-server
var jsonServer = require('json-server');
var app = jsonServer.create();
// app.use(jsonServer.defaults()); // 加上IE缓存解决，但不能同构

// end json-server

// var app = express();

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

var options = {
  dotfiles: 'ignore',
  // etag: false,
  // extensions: ['htm', 'html'],
  index: false,
  // maxAge: '1d',
  setHeaders: function (res, path) {
     res.header('Cache-Control', 'no-cache')
     res.header('Pragma', 'no-cache')
     res.header('Expires', '-1')
  }
};
app.use(express.static('public', options));

// // json-server
var router = jsonServer.router('db.json');
app.use('/api', router);

var wrapper = function(content) {
  var html = fs.readFileSync('./public/index.html', 'utf8');
  return html.replace('<body>', '<body>' + content);
}

var route = function(name, component, r) {
  r.get(name, function(req, res, next) {

    m.request = request.defaults({
      // transform: function(body, res) {
      //   var ctype = res.headers['content-type'];
      //   if (ctype && ctype.indexOf('application/json') !== -1) {
      //     return JSON.parse(body);
      //   } else {
      //     return body;
      //   }
      // },
      json: true,
      headers: {
        cookie: req.headers.cookie,
      }
    });

    res.type('html');
    function send(scope) {
      res.end(wrapper(render(component.view(scope))));
      scope && scope.onunload && scope.onunload();
    }
    if (component.controller.length < 2) { //sync, response imedeatly
      return send(component.controller(req.params));
    }
    // async, call with callback
    return component.controller(req.params, function(scope, err) {
      if (err) {
        return next(err);
      }
      send(scope);
    });
  });
}

var router = express.Router();
for (var name in routes) {
  route(name, routes[name], router);
}
app.use('/', router);

module.exports = app;
