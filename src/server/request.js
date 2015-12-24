var request = require('request-promise');

module.exports = function(headers) {
  return request.defaults(headers)
}
