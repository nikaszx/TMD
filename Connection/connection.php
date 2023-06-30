<?php

class Connection{
    private $username = "root";
    private $password = "";
    private $db_name = "tmd";
    private $host = "localhost";
    private $conn;

    public function getConnection(){
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=". $this->host.";dbname=". $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
            echo "Erro na conexão: ". $e->getMessage();
        }
        return $this->conn;
    }
}
?>