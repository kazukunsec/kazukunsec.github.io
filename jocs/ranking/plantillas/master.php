<?php require_once $_SERVER['DOCUMENT_ROOT'] . "/mNACTEC_Grup3/ranking/librerias/ti.php" ?>

<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?php startblock('titulo') ?>
        <?php endblock() ?>
    </title>
    <link rel="stylesheet" href="/mNACTEC_Grup3/bootstrap/css/bootstrap.min.css">

    <script src="/mNACTEC_Grup3/bootstrap/js/popper.min.js"></script>
    <script src="/mNACTEC_Grup3/bootstrap/js/jquery-3.4.1.min.js"></script>
    <script src="/mNACTEC_Grup3/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/mNACTEC_Grup3/ranking/index.php">Usuarios</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown ml-2">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Datos usuarios</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="./vistas/users.php">Users</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <body>
        <?php startblock('body') ?>
        <?php endblock() ?>
    </body>
    
</body>
</html>