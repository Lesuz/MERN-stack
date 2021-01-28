var http = require("http");
http.createServer(function(request, response) {

    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type':'text/html' });

    if (request.url === "/helloworld"){
        
        response.write('<h1>Hello World</h1>');
    } 
    else if (request.url === "/homepage"){
        
        response.write('<h1>HOMEPAGE</h1>');
    }
    // Send the response body as "Hello World"
    response.end('Bye bye World\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081');