var express = require('express');
var app = express();

app.use(express.static(__dirname));

//When using angular in HTML5 mode the following is necessary:
app.all("/*", function(req, res) {
	res.sendfile("index.html", {
		root: __dirname
	});
});

app.listen(80);
console.log('Listening on port 80');


