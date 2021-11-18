const utils = require('./utils');

utils.greetings();

const http = require('http');
const port = 3001

const handler = (request, response) =>{
    console.log("New USER!");
    response.end('Hello!');
};
const server = http.createServer(handler);

server.listen(port, (err) => {
    if(err){
        return console.log("smth went wrong..");
    }

    console.log("WORKS!!");
});