<?php 
    include '../plantillas/master.php';
    include $_SERVER['DOCUMENT_ROOT'] . '/mNACTEC_Grup3/ranking/librerias/bd.php';
    ?>

<?
    session_start();
?>

<?php startblock('titulo') ?>
    Nuevo Usuario
<?php endblock() ?>

<?php startblock('body') ?>
    
    <div class="container">

        <div class="card mt-2 mb-2 border-primary">
            <div class="card-header bg-primary text-white">
                USER
            </div>

            <div class="card-body">
                <form action="../controllers/UserController.php" method="post">
                    <div class="form-group mr-2">

                        <!-- Identificador -->
                        <div class="form-group row mb-3">
                            <label class="col-2 col-form-label" for="txtIdentificador">Identificador User</label>
                            <input class="form-control col-10" type="text" name="idUser" id="txtIdentificador" placeholder="Identificador del usuario" maxlength="50">
                        </div>

                        <!-- Nombre -->
                        <div class="form-group row mb-3">
                            <label class="col-2 col-form-label" for="txtNombre">Nombre User</label>
                            <input class="form-control col-10" type="text" name="UserName" id="txtNombre" placeholder="Nombre del usuario" maxlength="50">
                        </div>

                        <!-- Nombre -->
                        <div class="form-group row mb-3">
                            <label class="col-2 col-form-label" for="txtNombre">Score</label>
                            <input class="form-control col-10" type="text" name="Score" id="txtScore" placeholder="Puntuación del usuario" maxlength="50">
                        </div>
                        
                        <!-- Botones -->
                        <div class="form-group row">
                            <!-- Aceptar -->
                            <div class="offset-2">
                                <input class="btn btn-primary" name="aceptar" type="submit" value="ACEPTAR">
                            </div>

                            <!-- Cancelar -->
                            <div class="ml-3">
                                <input class="btn btn-secondary" type="button" onclick="window.location.href='./users.php'" value="CANCELAR">
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    </div>

<?php endblock() ?>

