const fs = require('fs');

exports.index = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsweet.js Sugar Journal</title>
</head>
<body>
  <div id="root"></div>
  <script>${fs.readFileSync('./app.js')}</script>
</body>
</html>`;
