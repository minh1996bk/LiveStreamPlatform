var express = require('express');
var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');


var server = require('http').Server(app);
server.listen(3000);

app.get('/home', function(req, res) {
    res.render('home');
});