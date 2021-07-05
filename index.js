//Importing http, two ways
//import http from 'http';
const { Console } = require('console');
const http = require('http');

//Create Server
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello localhost')
});

//Listen
const PORT = 3001;
app.listen(PORT);
console(`Server is running on port ${PORT}`);

