var express = require('express');
var primes = require('./primes');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World! <br/> Navigate to /primes to show first 100 primes.');
});

app.get('/test', function(request, response) {
  response.send('just a test');
});

app.get('/primes', function(request, response) {
  var n = 100;
  var data = primes.getPrimes(n);
  var body = 'First ' + n + ' primes: ';
  for( var i = 0; i < n; ++i ){
	body += data[i];
	if( i < n - 1 ){
		body += ', ';
	}
  }
  response.send(body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});