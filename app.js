// load http module
const http = require('http');

// create server
const server = http.createServer();

// running server 
server.listen(3000, function(){
    console.log('Node.JS server running at port 3000');
})