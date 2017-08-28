<?php
header('Access-Control-Allow-Origin: *');
 require_once "connect.php";
 $connect = new mysqli($host, $db_user, $db_password, $db_name);
 		$connect -> query ('SET NAMES utf8');
		$connect -> query ('SET CHARACTER_SET utf8_unicode_ci');
 $output = array();
 $query = "SELECT * FROM books";
 $result = mysqli_query($connect, $query);
 if(mysqli_num_rows($result) > 0)
 {
      while($row = mysqli_fetch_array($result))
      {
           $output[] = $row;
      }
      echo json_encode($output);
 }
 $connect->close();

?>
