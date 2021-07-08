<?php
//get data from form  

$name = $_POST['form-name'];
$email= $_POST['form-email'];
$message= $_POST['form-msg'];

$to = "itsmespd@gmail.com";

$subject = "Mail From: ". $name;

$txt ="Name: ". $name . "\r\n  Email: " . $email . "\r\n Message: " . $message;
$headers = "From:".$email;

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>