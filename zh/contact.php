<?php
    $subject = 'Contact Support';
    $toEmail = "madbahaa@gmail.com";
    $userName = $_POST["userName"];
    $userEmail = $_POST["userEmail"];
    $content =$_POST["content"];
    $mailHeaders = "From: " . $userName  . "<". $userEmail .">\r\n";
    $headers .= "Reply-To: " . $userName  . " <".$userEmail.">\r\n"; 
    $headers .= "Return-Path: " . $userName  . "<".$userEmail.">\r\n";
    $headers .= "From: " . $userName  . " <".$userEmail.">\r\n"; 
    
    if(mail($toEmail,$subject,$content, $headers)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>