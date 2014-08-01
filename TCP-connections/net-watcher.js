'use strict';

var
    fs = require('fs'),
    net = require('net'),
    filename = process.argv[2],
    server = net.createServer(function (connection) {
      // reporting
      console.log('Subscriber connected.');

      connection.write("Now watching '" + filename + "' for changes...\n");

      // watcher set up
      var watcher = fs.watch(filename, function () {
        connection.write("File '" + filename + "' changed: " + Date.now() + "\n");
      });

      // clean up
      connection.on('close', function () {
        console.log('Subscriber disconnected.');
        watcher.close();
      });

    });

    if (!filename) {
      throw Error('No file file called ' + filename);
    }

    server.listen(9778, function () {
      console.log('Listening for subscribers....');
    });
