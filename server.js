var app = require('./lib/server')
var routes = require('./app/routes');

app.buildRouter('/', routes);

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(3000);
