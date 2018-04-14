// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);


var mysql = require('mysql')
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'pi',
	password : 'little',
	database : 'espressopi'
});

connection.connect();

app.get('/shot_data', function(req,res){
connection.query('SELECT * FROM shot_data', function (error, rows){
	if(error) throw error;
	res.json(rows);

});
})

app.get('/normal_data', function(req,res){
connection.query('SELECT * FROM normal_data', function (error, rows){
	if(error) throw error;
	res.json(rows);

});
})

app.get('/on', function (req, res) {
  res.send('POST request to the homepage')
})


app.use(express.static(__dirname + '/'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/mainPage.html');
});



	
server.listen(8056, () => console.log("Listening on port 8056"))





app.get('/data', function (req, res) {
  db.all("select * from irtemp where Timestamp >= Datetime('now', '-60 minutes')", function(err,rows){
    res.json(rows);
  });
})


 
app.get('/', function (req, res) {
  res.sendFile((__dirname + '/client.html'));
})
 
app.listen(3000)


process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    db.close();
    process.exit();
});






