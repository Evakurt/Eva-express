<?php
     $firstName = $_POST['firstName'];
     $lastName = $_POST['lastName'];
     $date = $_POST['date'];
     $gender = $_POST['gender'];
     $email = $_POST['email'];
     $phone = $_POST['phone'];
     $phoneNumber = $_POST['phoneNumber'];
     $password1 = $_POST['password1'];
     $password2 = $_POST['password2'];
    
     //database connection

     $conn = new mysqli('localhost','root','','eva express');
     if($conn->connect_error){
        die('Connection Failed  : ' .$conn->connect_error);
     }else{
        $stmt = $conn->prepare("insert into registration(firstName, lastName, date, gender, email, phone, phoneNumber, password1, password2)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssissiiss",$firstName, $lastName, $date, $gender, $email, $phone, $phoneNumber, $password1, $password2);
            $stmt->execute();
            echo "Registration Successfully...";
            $stmt->close();
            $conn->close();
        }

?>