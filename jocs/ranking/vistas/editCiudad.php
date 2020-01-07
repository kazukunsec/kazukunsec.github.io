<?php 
    include '../plantillas/master.php';
    include $_SERVER['DOCUMENT_ROOT'] . '/DWES/AccesDades/HOTELS_Benito_Pol/librerias/bd.php';
?>

<?
    session_start();
?>

<?php startblock('titulo') ?>
    Editar Ciudad
<?php endblock() ?>

<?php startblock('body') ?>

<?php

    $id_ciudad = $_POST['editar_input'];

    $result = selectCiudad($id_ciudad);
    $nom_antic = $result['nombre'];
?>

    <div class="container">

        <div class="card mt-2 mb-2 border-primary">
            <div class="card-header bg-primary text-white">
                CIUDAD
            </div>

            <div class="card-body">
                <form action="../controllers/ciudadController.php" method="post">
                    <div class="form-group mr-2">

                        <!-- Identificador -->
                        <div class="form-group row mb-3">
                            <label class="col-2 col-form-label">Identificador</label>
                            <input class="form-control col-10" type="text" value="<?php echo $id_ciudad; ?>" disabled>
                        </div>

                        <!-- Nombre -->
                        <div class="form-group row mb-3">
                            <label class="col-2 col-form-label" for="txtNombreEdit">Nombre</label>
                            <input class="form-control col-10" type="text" name="txtNombreEdit" id="txtNombreEdit" value="<?php echo $nom_antic; ?>" maxlength="50">
                        </div>
                        
                        <!-- Botones -->
                        <div class="form-group row">
                            <!-- Aceptar -->
                            <div class="offset-2">
                                <input class="btn btn-primary" name="aceptar_edit" type="submit" value="ACEPTAR">
                            </div>

                            <!-- Cancelar -->
                            <div class="ml-3">
                                <input class="btn btn-secondary" type="button" onclick="window.location.href='./ciudades.php'" value="CANCELAR">
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    </div>

<?php endblock() ?>