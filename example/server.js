const http = require('http');
const foods = require('./data/foods');

// TODO: Modularize web APIs.
const server = http.createServer((req, res) => {
  if (req.url === '/api/foods' && req.method === 'GET') {
    res.writeHead(200, { 'Content-TYpe' : 'application/json' });
    res.end(JSON.stringify(foods));
  } else {
    res.writeHead(404, { 'Content-TYpe' : 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found'}));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server.js is running on port ${PORT}.`));