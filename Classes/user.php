<?php

include_once('Connection/connection.php');
$db = new Connection();

class OperationSchedule {
    public function schedule(){
        $FULL_NAME = $_POST['FULL_NAME'];
        $EMAIL = $_POST['EMAIL'];
        $AGE = $_POST['AGE'];
        $SCHEDULING_DATE = $_POST['SCHEDULING_DATE'];

        $conn = $db->getConnection();
        $query = "INSERT INTO scheduling (full_name, EMAIL, AGE, SCHEDULING_DATE) VALUES (:FULL_NAME, :EMAIL, :AGE, :SCHEDULING_DATE)";
        $stmt = $conn->prepare($query);

        $stmt->bindValue(':FULL_NAME', $FULL_NAME);
        $stmt->bindValue(':EMAIL', $EMAIL);
        $stmt->bindValue(':AGE', $AGE);
        $stmt->bindValue(':SCHEDULING_DATE', $SCHEDULING_DATE);
        $stmt->execute();
    }
}

?>