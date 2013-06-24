var express = require('express');
var primes = require('./primes');

function sendHtml( response, text ){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(text);
  response.end();
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<p>Hello World, it\'s me!</p>'+
    '<p><a href="/primes">Navigate here to see first few primes</a></p>'+
    '</body>'+
    '</html>';

	sendHtml(response, body);
});

app.get('/test', function(request, response) {
  response.send('just a test');
});

app.get('/primes', function(request, response) {
  var n = 100;
  var data = primes.getPrimes(n);
  
   var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<p>First ' + n + ' primes:</p>'+
    '<p>';
  
  for( var i = 0; i < n; ++i ){
	body += data[i];
	if( i < n - 1 ){
		body += ', ';
	}
  }
  body += '</p>'+
  '<p><a href="/">Go back to index</a></p>'+
    '</body>'+
    '</html>';
  
  sendHtml(response, body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});