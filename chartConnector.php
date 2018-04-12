<?php
$servername = "127.0.0.1";
$username = "spress";
$password = "little";
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
$tempDateQuery = "SELECT * FROM normal";
$result = mysql_query($tempDateQuery);
if (!$result) {
    die('Could not query:' . mysql_error());
}
echo mysql_result($result, 2); // outputs third employee's name

mysql_close($conn);
//Pressure
//$pressureQuery = "";
//$pressureResuly = $conn->query($pressureQuery);

?>