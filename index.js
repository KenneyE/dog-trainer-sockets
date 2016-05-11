var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/media', express.static(__dirname + '/media'));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log("Message received: " + msg);
        io.emit('chat message', msg);
    });
});

http.listen(app.get('port'), function(){
    console.log('listening on *:' + app.get('port'));
});