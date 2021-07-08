<?php
$name = $_POST['form-name'];
$email = $_POST['form-email'];
$message = $_POST['form-msg'];

$to = "itsmespd@gmail.com";
$subject = "RIA Emails";
$body = "Name: ".$name."\nEmail: ".$email."\nMessage: ".$message;
$headers = "From: " . $email;

//send email
mail($to, $subject, $body, $headers);
?>