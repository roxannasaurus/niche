<?php
$host = "fdb3.biz.nf";
$db_name = "1901064_niche";
$username = "1901064_niche";
$password = "callopie57";
 
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
 
//to handle connection error
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}
?>