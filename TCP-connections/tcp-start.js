"use strict";

var net = require('net'),
    server = net.creatServer(function (connection) {
      // do stuff with connection object
    });

server.listen(9778);