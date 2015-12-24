var express = require('express');
var render = require('mithril-node-render');

module.exports = function(el, base, map, app) {
  var r = express.Router();
  for (var m in map) {
    r.get(m, function(req, rep) {
      rep.send(render(map[m]));
    })
  }
  app.use(base, r);
}
