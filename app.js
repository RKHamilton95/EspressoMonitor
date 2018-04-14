// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var PythonShell = require('python-shell');

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
  PythonShell.run('../pythonMysqlScripts/sendData', {args: ['1']}, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  });
  res.send('Machine On')
})
app.get('/off', function (req, res) {
  PythonShell.run('../pythonMysqlScripts/sendData', {args: ['2']}, function (err, results) {
  if (err) throw err;
    
  // results is an array consisting of messages collected during execution
  });
  res.send('Machine Off')
})
app.get('/brewOn', function (req, res) {
  res.send('Brewing On')
})
app.get('/brewOff', function (req, res) {
  res.send('brewingOff')
})



app.use(express.static(__dirname + '/'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/mainPage.html');
});



	
server.listen(8056, () => console.log("Listening on port 8056"))






  //db.all("select * from irtemp where Timestamp >= Datetime('now', '-60 minutes')", function(err,rows){
   // res.json(rows);
  //});





process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    connection.close();
    process.exit();
});






