"use strict";

//PORT definition
const PORT = 3000;

//Import the HTTP Library
const http = require('http');

function handleRequest(req, res) {


}

//Create the web server
var server = http.createServer(handleRequest);

//Start listening on port 3000
server.listen(PORT, function(){
    console.log("Listening on port " + PORT);

});
