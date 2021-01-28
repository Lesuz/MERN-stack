var http = require("http");
http.createServer(function(request, response) {

    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type':'text/html' });
    
    response.write('<h1><em>Good Morning!</em></h1>');

    response.write(
        '<table style="border: 1px solid black; width: 100%; text-align: center ">' +
        '<tr style=""><th>Name</th><th>Address</th><th>City</th></tr>' +
        '<tr><td>Matti Meikäläinen</td><td>Timotie1, as 10</td><td><a href="https://www.tampere.fi/" target="_blank">Tampere</a></td></tr>' +
        '<tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>' +
        '</table>'
    );
    // Send the response body as "Hello World"
    response.end('Bye bye, World\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081');