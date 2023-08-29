// load http module
const http = require('http');

// create method to handle request 
function requestHandler(request, response){

    const url = request.url;

    switch (url) {
        case "/":
            response.statusCode = 200;
            response.write('Hello World');  
            response.end();       
            break;
        case "/about":
            response.statusCode = 200;
            response.write('This is my own page');
            response.end();
            break; 
        default:
            response.statusCode = 404;
            response.write('The page was not found');
            response.end();    
    }
};

// create server
const server = http.createServer(requestHandler);

// running server 
server.listen(3000, function(){
    console.log('Node.JS server running at port 3000');
})