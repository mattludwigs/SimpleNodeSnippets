var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

  'use strict';

  if (req.url === '/') {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) {
        console.log(err);
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  // future form request gets processed here
})
  .listen(9778);

console.log('Grab a beer @ port: ' + 9778);  


