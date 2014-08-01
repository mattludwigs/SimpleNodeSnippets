var http = require('http'),
    fs = require('fs'),
    file = require('./server-helper');

http.createServer(function (req, res) {

  'use strict';

  if (req.url === '/') {
    var filer = file({
      filename: '/index.html',
      mimeType: 'text/html'
    });

    filer.renderFile(res);
  }

  if (req.url === '/form') {
   var filer = file({
    filename: '/form.html',
    mimeType: 'text/html'
   });

   filer.renderFile(res);
  }

})
  .listen(9778);

console.log('Grab a beer @ port: ' + 9778);  


