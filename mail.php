<?php 
$fname = $_POST["FirstName"];
$lname= $_POST["LastName"]; 
$fullname = $fname+" "+$lname; 
$phone= $_POST["userPhone"]; 
$message= $_POST["userMessage"];

$ToEmail = 'ahmhama61@gmail.com'; 
$EmailSubject = 'Site contact form'; 

$headers = 'From :' . $fullname . '\r\n';

if(empty($name)||empty($lname)||empty($phone)||empty($message)){
 echo ("please");
}
else{
mail($ToEmail,$EmailSubject,$message,$headers);
echo "<script type='text/javascript'>
    window.history.go(-1);
</script>";
}
?>