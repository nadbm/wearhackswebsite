var express = require('express');
var app = express();

//use ejs templating
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) {
    res.render('homepage');
});

var server = app.listen(3000, function () {
	console.log('listening on port 3000');
});

