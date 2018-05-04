
const http = require("http");
const fs = require("fs");

const PORT = 8080;

function handleRequest(request, response) {
    const path = request.url;
    switch(path) {
        case "/":
        return displayRoot(path, request, response);
        break;

        case "/foods":
        return displayFoods(path, request, response);
        break;

        case "/movies":
        return displayMovies(path, request, response);
        break;

        case "/cssFrames":
        return displayCSSFrameworks(path, request, response);
        break;

        default:
        return display404(path, request, response);
        break;
    }
    // response.end("It works " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server Listening on: " + PORT);
});


function displayRoot(url, request, response) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}

function displayFoods(url, request, response) {
    fs.readFile(__dirname + "/foods.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}

function displayMovies(url, request, response) {
    fs.readFile(__dirname + "/movies.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}

function displayCSSFrameworks(url, request, response) {
    fs.readFile(__dirname + "/cssFrames.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}


function display404(url, request, response) {
    
    response.end("404 Page Not Found.");

}

