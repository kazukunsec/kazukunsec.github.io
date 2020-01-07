<?php 
    include '../plantillas/master.php';
    include $_SERVER['DOCUMENT_ROOT'] . '/mNACTEC_Grup3/ranking/librerias/bd.php';
?>

<?
    session_start();
?>

<?php startblock('titulo') ?>
    Users
<?php endblock() ?>

<?php startblock('body') ?>

    <div class="card border-primary m-3">
        <div class="card-body">
            <form action="./altaUser.php">
                <button type="submit" class="btn btn-primary">NUEVO USUARIO</button>
            </form>
        </div>
    </div>

    <?php
    
        $_SESSION['usuarios'] = selectAllRanking();

        if (isset($_SESSION['usuarios']) && !empty($_SESSION['usuarios'])) {

            $v_users = $_SESSION['usuarios'];

            echo 
            '<div class="card border-primary m-3">
                <div class="card-header text-white bg-primary">Lista de usuarios</div>
                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>';
                        
                            foreach ($v_users as $v_user) {

                                echo '<tr> <td>' . $v_user['idUser'] . '</td>
                                <td>' . $v_user['UserName']. '</td>
                                <td>' . $v_user['Score'] . '</td>';
                            }

                            echo '
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            ';

        }
        else {

            echo 
            '
            <div class="card border-primary m-3">
                <div class="card-header text-white bg-primary">Lista de usuarios</div>
                <div class="card-body">
                    <div class="alert alert-dismissible alert-info">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>No hay usuarios.</strong>
                    </div>
                </div>
            </div>
            ';

        }

    ?>

<?php endblock() ?>