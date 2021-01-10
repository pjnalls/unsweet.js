const { index } = require('../index');

exports.bootstrapApp = (req, res) => {
  try { res.writeHead(200, { 'Content-Type' : 'text/html' }).end(index); }
  catch (error) { console.log(error); }
}
