var m = require('mithril');

var repos = m.request({
  url: 'https://api.github.com/repositories?since=364',
  method: 'GET'
});

repos.then(function(data) {
  console.log(data);
});
