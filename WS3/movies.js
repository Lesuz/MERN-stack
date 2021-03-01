const request = require("request");
var http = require("http");
var data;

request (
    "http://www.omdbapi.com/?t=supernatural&apikey=498eb39c",
    {json: true},
    (err, res, body) => {
        if(err) {
            return console.log(err)
        }
        data = body;
        console.log(body);
    }
);

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    
    response.write("<table border='1'>");
    response.write("<tr><th colspan='2'>" + data.Title + "</th></tr>");
    response.write("<tr><td rowspan='4'><img src='" + data.Poster + "'></td></tr>");
    response.write("<tr><td> <b>Actors: </b><br><br>" + data.Actors + "</td></tr>");
    response.write("<tr><td> <b>Awards:</b><br><br>" + data.Awards + "</td></tr>");
    response.write("<tr><td> <b>Plot:</b><br><br> " + data.Plot + "</td></tr>");
    
    response.write("</table>");

    response.end();
})
.listen(3000);

