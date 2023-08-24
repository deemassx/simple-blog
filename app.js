// load http module
const http = require('http');

// create method to handle request 
function requestHandler(request, response){
    response.statusCode = 200;
    response.write('Hello World');
    response.end();
};

// create server
const server = http.createServer(requestHandler);

// running server 
server.listen(3000, function(){
    console.log('Node.JS server running at port 3000');
})