var fs = require('fs'),
    // takes file as an command line arg
    stream = fs.createReadStream(process.argv[2]);

stream.on('data', function (chunk) {
  process.stdout.write(chunk + '\n');
});

stream.on('error', function (err) {
  process.stderr.write("ERROR: " + err.message + '\n');
});