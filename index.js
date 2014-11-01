var express = require('express');
var app = express();
chimp = require('./chimp')

//use ejs templating
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) {
    res.render('homepage');
});

app.post('/s', chimp.subscribe);

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});


