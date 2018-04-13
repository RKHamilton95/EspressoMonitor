// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/mainPage.html');
});



	
server.listen(8056, () => console.log("Listening on port 8056"))








