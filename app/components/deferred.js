var m = require('mithril');

var doSuccess = function (msg) {
  var defer = m.deferred();
  setTimeout(function() {
    defer.resolve(msg);
  }, 1000);
  return defer.promise;
};


var doError = function (msg) {
  var defer = m.deferred();
  setTimeout(function() {
    defer.reject(msg);
  }, 2000);
  return defer.promise;
}

doSuccess('success').then(function(data) {
  console.log(data);
  return 'hello ' + data;
}).then(function(format) {
  console.log(format);
});

doError('error').then(
  function(data) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  }
);

doSuccess('feature error').then(function(data) {
  console.log(data);
  throw new Error('error feature ...');
}).then(function(data) {
  console.log(data);
}, function(error) {
  console.log(error);
});

doError('401').then(
  function(data) {
    console.log(data);
  },
  function(error) {
    if (error == '401') {
      throw new Error('401')
    }
  }
);

// global
m.deferred.onerror = function(error) {
  console.log(error, 'global');
}
