<?php

   
   //$to = "dariolalic123@gmail.com, bojan.filipovic1@gmail.com";
   $to = "sime.jadrijev@gmail.com";

   $sender = $_POST["email"];

   $subject = "Imate novi odvjetnički upit!";
   
   $ime = $_POST['ime'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $poruka = $_POST['poruka'];
   
   $message = "Ime: " . $ime . "\n" . "Email: " . $email . "\n" . "Broj telefona: " . $phone . "\n" . "Poruka: " . $poruka;
   //$message = $_POST["poruka"]; 
   

   $header = "Od: " . $_POST['ime'] . " <" . $_POST['email'] . ">\r\n"; // "From:<$_POST['ime'] $_POST['prezime']>$_POST['email'] \r\n"
   $header .= "Reply-To: " . $_POST['email'] . "\r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html;charset=UTF-8\r\n";
   

   $sent = mail($to, $subject, $message, $header); 
   $to_sender = mail($sender, "Zahtjev uspješno poslan", "Poštovani, Vaš upit je uspješno poslan našem timu koji će vas kontaktirati u najkraćem roku. Hvala!", $header);
   
   
   if( $sent == true )
      echo true; 
   else
      echo false; 
?>