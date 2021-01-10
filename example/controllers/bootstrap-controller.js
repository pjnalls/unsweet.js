const Index = require('../index');

exports.bootstrapApp = (req, res) => {
  try { res.writeHead(200, { 'Content-Type' : 'text/html' }).end(Index); }
  catch (error) { console.log(error); }
}
