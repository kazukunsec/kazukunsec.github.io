<?php 
    include '../plantillas/master.php';
    include $_SERVER['DOCUMENT_ROOT'] . '/mNACTEC_Grup3/ranking/librerias/bd.php';
?>

<?php

    if (isset($_POST['aceptar'])) {
        insertUser($_POST['idUser'], $_POST['UserName'],$_POST['Score']);

        header('Location: ../vistas/users.php');
    }

?>