<?php
    echo "<div id=\"response\">";
  $name             = '';
  $contact          = '';
  $email            = '';
  $company          = '';
  $message          = '';

  $name             = $_POST['fullname'];
  $contact          = $_POST['contact_number'];
  $email            = $_POST['email'];
  $company          = $_POST['company'];
  $message          = $_POST['message'];

  if (($name==''|| $contact=='' || $email=='' || $message=='')) { 
          echo "<script type='text/javascript'>alert('Please fill all the required fields * ');window.history.back()</script>";
  } else {
            require("Include/PHPMailerAutoload.php");
            $mail = new PHPMailer;
            $mail->isSMTP();                    // Set mailer to use SMTP
            $mail->Host = '';                   // Specify main and backup server
            $mail->SMTPAuth = true;             // Enable SMTP authentication
            $mail->Username = '';               // SMTP username
            $mail->Password = '';               // SMTP password
            $mail->SMTPSecure = 'ssl';          // Enable encryption, 'ssl' also accepted
            $mail->Port = 465;
            $mail->From = '';
            $mail->FromName = $name;
            $mail->AddReplyTo($email, $name);
            $mail->addAddress('');              // Add a recipient
            $mail->isHTML(true);                // Set email format to HTML
            $mail->Subject = "INQUIRY FORM";
            $mail->Body = "Full Name : ".$name." <br /> Contact Number : ".$contact." <br/> Email Address : ".email." <br /> Company Name : ".$company." <br /> Enquiry : ".$message." <br />";
            if(!$mail->Send()) {
                echo "<script type='text/javascript'>alert('Email not sent, please contact us')</script>{$mail->ErrorInfo}";
            }else {
                echo "<script type='text/javascript'>alert('Email sent successfully! Thank you, we will reply as soon as possible.');window.history.back()</script>";
            }
  }  
  echo "</div>";
?>