//Importing http, two ways
//import http from 'http';

//We change http for express
//const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());

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

//Create Server with http
//const app = http.createServer((request, response) => {
    //Now we return a json instead of plain text
    //response.writeHead(200, {'Content-Type': 'text/plain'})
    //response.writeHead(200, {'Content-Type': 'application/json'})
    //We indicate the value returned
    //response.end(JSON.stringify(friends));
//});

//Create a server with express
app.get('/', (request, response) => {
    response.send('<h1>Hello</h1>');
});

app.get('/api/friends', (request, response) => {
    response.json(friends);
});

app.get('/api/friends/:id', (request, response) => {
    const id = request.params.id;
    const friend = friends.find(element => element.id === parseInt(id));
    if (friend !== undefined) {
        response.json(friend);
    } else {
        response.status(404).end
        response.send('<h1>You dont\'t have any friends</h1>');
    }
});

app.post('/api/friends', (request, response) => {
    const friend = request.body;
    const newFriend = {
        id: friends.length,
        content: friend.content
    }

    if(!friend || !friend.content) {
        response.status(400).json({
            error: 'No name of friend was send'
        })
    }
    friends = [...friends, newFriend]
    response.json(newFriend)
});

//Listen
const PORT = 3001;
// app.listen(PORT);
// console.log(`Server is running on port ${PORT}`);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


