
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



var users = [];
io.on('connection', function(socket){

    // Identify this client
    /*console.log(socket.handshake.address);
    console.log(socket.handshake.time);
    console.log(socket.handshake.headers.referer);

    console.log(socket.client.conn.id);
    console.log(socket.client.conn.remoteAddress);
    */
    console.log('a user connected ' + socket.nsp.server.address);
    var userLocal = {
        id : socket.client.conn.id,
        name : getNameInUrl(socket.handshake.headers.referer),
        address : socket.client.conn.remoteAddress
    };
    users.push(userLocal);

    socket.on('disconnect', function(){
        console.log('user disconnected');
        users = deleteUser(userLocal.id, users);
        socket.broadcast.emit('userAuth', users);
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });


    /**
     * userAuth Listener : send everythings uses
     */
     socket.broadcast.emit('userAuth', users);
     socket.emit('userAuth', users);

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});






/***
* function helper
*/
function getNameInUrl(referer)
{
    var url = referer;
    var nameUser = url.substring(url.indexOf('name=')+5);
    nameUser = nameUser.toLowerCase();
    nameUser = nameUser.charAt(0).toUpperCase() + nameUser.slice(1);

    return nameUser;
}

function deleteUser(idUser, arrayUser)
{
    arrayUser.forEach(function(element, index, array){
        if (element.id == idUser) {
            arrayUser.splice(index, 1); // delete one Item
            return false;
        }
    });

    return arrayUser;
}
