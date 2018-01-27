var FileSender = require('./lib/FileSender.js');
var ServerChat = require('./lib/ServerChat');
var cache = {};
var sender = new FileSender();
var serverChat = new ServerChat();

var http = require('http');

var server = http.createServer(function(req, res) {
    var filePath = false;
    console.log(req.url);
    if (req.url == '/') {
        filePath = 'public/index.html';
    
    } else {
        filePath = 'public' +req.url;
    }

    var absPath = './' + filePath;
    sender.serveStatic(res, cache, absPath);
});

serverChat.listen(server);

server.listen(3000, function() {
    console.log('port 3000');
});
