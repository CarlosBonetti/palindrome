var express = require('express');
var routes = require('./routes');

var app = express();
var port = process.env.PORT || 8080;

app.use('/api', routes);
app.use(express.static('./app'));

app.listen(port, function() {
  console.log('Server started at port ' + port);
});
