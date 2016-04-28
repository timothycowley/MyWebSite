var express = require('express');
var app = express();

app.use(express.static(__dirname));

//changed the above to this
// app.use(function(req, res) {
// 		res.sendfile(__dirname + '/index.html');
// });

app.listen(80);
console.log('Listening on port 80');


