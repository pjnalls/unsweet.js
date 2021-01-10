const http = require('http');
const { bootstrapApp } = require('./controllers/bootstrap-controller');

const server = http.createServer((req, res) => {
  bootstrapApp(req, res);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server.js is running on port ${PORT}.`));