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
    connection.query('SELECT * FROM shot_data WHERE id IS NULL', function (error, rows){
        if(error) throw error;
        res.json(rows);
    });
})

app.get('/shot_data/:id', function(req,res){
    var id = req.params.id;
    connection.query('SELECT * FROM shot_data WHERE id =?',[id], function (error, rows){
        if(error) throw error;
        res.json(rows);
    });
})


app.get('/boiler_fill', function(req,res){
    connection.query('SELECT * FROM boiler_fill_data', function (error, rows){
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

app.get('/getLastNormal', function(req,res){
    connection.query('SELECT * FROM normal_data ORDER BY id DESC limit 0,1;', function (error, rows){
        if(error) throw error;
        res.json(rows);
    });
})


app.get('/getNormal60', function(req,res){
    connection.query("SELECT * FROM normal_data WHERE timeStamp >= DATE_SUB(Now(),INTERVAL 30 MINUTE)", function (error, rows){
        if(error) throw error;
        res.json(rows);
    });
})


app.get('/on', function (req, res) {
  PythonShell.run('../pythonMysqlScripts/sendData.py', {args: ['1']},function (err, results) {
  if (err) throw err;
  });
  res.send('Machine On')
})
app.get('/off', function (req, res) {
  PythonShell.run('../pythonMysqlScripts/sendData.py', {args: ['2']}, function (err, results) {
  if (err) throw err;
  });
  res.send('Machine Off')
})
app.get('/brew', function (req, res) {
  PythonShell.run('../pythonMysqlScripts/sendData.py', {args: ['3']}, function (err, results) {
  if (err) throw err;
  });
  res.send('Brewing')
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






