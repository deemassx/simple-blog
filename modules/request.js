// load renderfile module
const renderFile = require('./renderfile');

// create method to handle request 
function requestHandler(request, response){

    // get url
    const url = request.url;

    // select route
    switch (url) {
        case "/":
            renderFile('index.html', response);
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

// export module
module.exports = requestHandler;