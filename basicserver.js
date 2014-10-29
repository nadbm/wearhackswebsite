var http = require('http'); //http module
var myServer = http.createServer(function(request,response) {
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<b>Hello</b> World");
	response.end();
});//create server
myServer.listen(3000);
