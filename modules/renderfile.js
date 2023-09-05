// load fs module
const fs = require('fs');

function renderFile(file, response){
    fs.readFile(file, function(error, data){
        if(error){
            console.log(error.message);
        };

        // set the Content-Type
         response.writeHead(200,{
            'Content-Type':'text/html'
         });

        //  rendering HTML
        response.write(data);
        response.end();
    });
};

module.exports = renderFile;