<?php

    function openBD() {
        $servername = "localhost";
        // $puerto = "3308";
        $puerto = "3308";
        $username = "root";
        $password = "";

        $conn = new PDO("mysql:host=$servername;port=$puerto;dbname=mnactec_grup3", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conn;
    }

    function closeBD() {
        return null;
    }

    function selectAllRanking() {
        $conn = openBD();

        $stnc = $conn->prepare('SELECT * FROM ranking ORDER BY Score desc');
        $stnc->execute();
        
        $result = $stnc->fetchAll(PDO::FETCH_ASSOC);

        $conn = closeBD();

        return $result;
    }

    /*function selectCiudad($id_ciudad) {
        $conn = openBD();

        $stnc = $conn->prepare('SELECT * FROM ciudades WHERE id_ciudad = :id_ciudad');
        $stnc->bindParam(':id_ciudad', $id_ciudad);
        $stnc->execute();

        $result = $stnc->fetch(PDO::FETCH_ASSOC);

        $conn = closeBD();

        return $result;
    }*/

    function insertUser($id_User, $UserName, $Score) {
        $conn = openBD();

        $stnc = $conn->prepare("INSERT INTO ranking VALUES (:idUser, :UserName, :Score)");
        $stnc->bindParam(':idUser', $id_User);
        $stnc->bindParam(':UserName', $UserName);
        $stnc->bindParam(':Score', $Score);

        $stnc->execute();

        $conn = closeBD();
    }
/*
    function deleteCiutat($id_User) {
        $conn = openBD();

        $stnc = $conn->prepare("DELETE FROM ranking WHERE idUser = :idUser");
        $stnc->bindParam(':idUser', $idUser);

        $stnc->execute();

        $conn = closeBD();
    }*/
/*
    function modifyCiudad($id_ciudad, $nombre) {
        $conn = openBD();

        $stnc = $conn->prepare("UPDATE ciudades SET nombre = :nombre WHERE id_ciudad = :id_ciudad");
        $stnc->bindParam(':id_ciudad', $id_ciudad);
        $stnc->bindParam(':nombre', $nombre);

        $stnc->execute();

        $conn = closeBD();
    }*/

?>