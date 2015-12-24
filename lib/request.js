var request = require('superagent');
console.log(request);
module.exports = function(headers) {
  for (var h in headers) {
    request.options(h, headers[h]);
  }

  return function(options) {
    var p = m.deferred();
    request.get(options.url).send(function(err, res) {
      if (err) {
        p.reject(err);
      } else {
        p.resolve(res);
      }
    });
    return p.promise;
  }
}
