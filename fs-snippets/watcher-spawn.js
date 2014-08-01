"use strict";
var
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (!filename) {
  throw Error('Filename must be passed');
}

fs.watch(filename, function () {
  var ls = spawn('ls', ['-lh', filename]),
      output = '';

  ls.stdout.on('data', function (chunk) {
    output += chunk.toString();
  });

  ls.on('close', function () {
    var parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
  })

});

console.log('Watching ' + filename + '!');
