<?php
$servername = "localhost";
$username = "root";
$password = "little";
$dbname = "espressopi";
echo "This shit works";
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

if ($tempDateQuery->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "date: " . $row["date"]. " - temperature: " . $row["temperature"];
    }
} else {
    echo "0 results";
}
$conn->close();
//Pressure
//$pressureQuery = "";
//$pressureResuly = $conn->query($pressureQuery);

?>