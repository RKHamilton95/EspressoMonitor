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
printf("Before");
/* Select queries return a resultset */
if ($result = mysqli_query($conn, "SELECT * FROM normal")) {
    printf("Select returned %d rows.\n", mysqli_num_rows($result));

    /* free result set */
    mysqli_free_result($result);
}
printf("After");
$conn->close();
//Pressure
//$pressureQuery = "";
//$pressureResuly = $conn->query($pressureQuery);

?>