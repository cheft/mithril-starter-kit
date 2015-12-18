var mock = require('./mock');
root.window = mock.window;

var m = require('mithril');
// var render = require('mithril-node-render');

// console.log(render(m('div')));

var request = require('request');
m.request = request;

var repos = m.request({
  url: 'http://my.qfang.com:9291/qfang-broker-login/login/submit',
  method: 'post',
  formData: {
    phone: '18788855540',
    password: '88888888',
    isencode: 'false',
    forgotpassword: 'false',
    security: ''
  }
}, function(error, res, data) {
  console.log(data);
});
