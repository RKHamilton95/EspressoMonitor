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

/* Select queries return a resultset */
if ($result = $mysqli->query($tempDateQuery)) {
    printf("Select returned %d rows.\n", $result->num_rows);

    /* free result set */
    $result->close();
}


$conn->close();
//Pressure
//$pressureQuery = "";
//$pressureResuly = $conn->query($pressureQuery);

?>