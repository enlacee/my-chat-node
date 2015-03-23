
/**
 * Module dependencies.
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    console.log(req.query.name);
    if (req.query.name) {
        res.render( 'index.html', { user : req.query.name } );
    } else {
        res.sendfile('login.html');
    }
});

app.get('/chat', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.broadcast.emit('hi');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });  


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});