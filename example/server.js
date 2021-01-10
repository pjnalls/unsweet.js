const http = require('http');
const { bootstrapApp } = require('./controllers/bootstrap-controller');
const { getAllFoods } = require('./controllers/food-controller');

// TODO: Modularize web APIs.
const server = http.createServer((req, res) => {
  bootstrapApp();

  if (req.url === '/api/foods' && req.method === 'GET') {
    getAllFoods();
  } else {
    res.writeHead(404, { 'Content-Type' : 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found'}));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server.js is running on port ${PORT}.`));