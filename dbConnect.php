<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tbl_contact";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];
$employee_number = $_POST['employee_number'];

$sql = "INSERT INTO users (username, password, employee_number) VALUES ('$username', '$password', '$employee_number')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
