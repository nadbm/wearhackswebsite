var express = require('express');
var app = express();
exports.app = app;

chimp = require('./chimp')



//use ejs templating
app.set('view engine','ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) {
	console.log(req);
    res.render('homepage');
});

app.post('/s', chimp.subscribe);

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});




