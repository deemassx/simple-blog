// load http module
const http = require('http');

// load requestHandler module
const requestHandler = require('./modules/request');

// create server
const server = http.createServer(requestHandler);

// running server 
server.listen(3000, function(){
    console.log('Node.JS server running at port 3000');
})