<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "espressopi";

//Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check Connection
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 

//SQL Results
//Temperature and Date Time
$tempDateQuery = "SELECT * FROM temperature LIMIT 100";
$tempDateResult = $conn->query($tempQuery);
//Pressure
//$pressureQuery = "";
//$pressureResuly = $conn->query($pressureQuery);

?>