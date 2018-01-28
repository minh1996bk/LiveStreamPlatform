
// configure web app
var express = require('express');
var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/streamer', function(req, res) {
    res.render('StreamerChannel');
});


// launching app to server
var server = require('http').Server(app);

server.listen(3000);


// create io that listen to server 
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log("User connected: " + socket.id);
    socket.on('disconnect', function() {
        console.log(socket.id + ' disconnected!');
    });
});