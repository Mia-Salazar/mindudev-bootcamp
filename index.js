//Importing http, two ways
//import http from 'http';
const { Console } = require('console');
const http = require('http');

const friends =  [
    {
      "id": 0,
      "name": "Liz Gillespie"
    },
    {
      "id": 1,
      "name": "Lorna Kelly"
    },
    {
      "id": 2,
      "name": "Harvey Gentry"
    }
];

//Create Server
const app = http.createServer((request, response) => {
    //Now we return a json instead of plain text
    //response.writeHead(200, {'Content-Type': 'text/plain'})
    response.writeHead(200, {'Content-Type': 'application/json'})
    //We indicate the value returned
    response.end(JSON.stringify(friends));
});

//Listen
const PORT = 3001;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);

