module.exports = function (obj) {
	var fs = require('fs');

	var server = {

		obj: obj,

		renderFile: function (res) {
			var self = this;

			fs.readFile(__dirname + this.obj.filename, function (err, data) {
	      if (err) {
	        console.log(err);
	      }

	      res.writeHead(200, {'Content-Type': self.obj.mimeType});
	      res.write(data);
	      res.end();
    	});
		}
	}

	return server;
}