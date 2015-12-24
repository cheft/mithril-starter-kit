var app = require('./src/server')
var route = require('./src/server/route');
var router = require('./app/router');

route(null, '/', router, app);

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(3000);
