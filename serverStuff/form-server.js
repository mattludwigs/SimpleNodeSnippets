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

  if (req.url === '/form') {
   fs.readFile(__dirname + '/form.html', function (err, data) {
      if (err) {
        console.log(err);
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();  
    })
  }

})
  .listen(9778);

console.log('Grab a beer @ port: ' + 9778);  


