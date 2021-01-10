const http = require('http');
const { bootstrapApp } = require('./controllers/bootstrap-controller');
const { getAllFoods } = require('./controllers/food-controller');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') bootstrapApp(req, res);
  else if (req.url === '/api/foods' && req.method === 'GET') getAllFoods(req, res);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server.js is running on port ${PORT}.`));