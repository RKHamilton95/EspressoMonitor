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
$tempDateResult = $conn->query($tempDateQuery);

if ($tempDateQuery->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "date: " . $row["timeStamp"]. " - boilerTemp: " . $row["boilerTemp"]. " - ambientTemp: " . $row["ambientTemp"]. " - ambientHumidity: " . $row["ambientHumidity"];
    }
} else {
    echo "0 results";
}

$conn->close();
//Pressure
//$pressureQuery = "";
//$pressureResuly = $conn->query($pressureQuery);

?>