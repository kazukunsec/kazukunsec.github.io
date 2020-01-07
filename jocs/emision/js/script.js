
$(document).ready(function() {
    $("#explicacioJoc").modal("show");
    //document.getElementById("cerrarModal").addEventListener("click",funcio(),false);


  });

    
/*
    var error = true;
    var user = "AAA";

    while (error) {
        error = false;

        user = prompt("Introdueix un nom (3 lletres):", "");

        if (user !== null) {
            if (user.length !== 3) {
                error = true;
            }
            if (user.toUpperCase() === "XXX" || user.toUpperCase() === "SEX" || user.toUpperCase() === ".l." || user.toUpperCase() === "S3X") {
                error = true;
            }
            if (!isNaN(user)){
                error = true;
            }
        }
        else {
            error = true;
        }
    }

    //Nom de l'usuari, puntuació a 0 i la cookie caducarà quan passi 1 any
    setCookie(user, 0, 365);
    */


function funcio() {
    var username = document.querySelector("#inputName");
    var user = username.value;
    /*if (user.trim() != "" && !isNaN(user) && user.length !== 3 && user.toUpperCase() === "XXX" && user.toUpperCase() === "SEX" && user.toUpperCase() === ".l." && user.toUpperCase() === "S3X" ) {
        $("#explicacioJoc").modal("show");

       
      }
      else{
        setCookie(user, 0, 365);
      }
    */
    if(user.length <3 || user.toUpperCase() === "XXX" || user.toUpperCase() === "SEX" || user.toUpperCase() === ".l." || user.toUpperCase() === "S3X"){
       // $("#explicacioJoc").modal('hide');

       location.reload();

     
          // $("#explicacioJoc").modal();
    //document.getElementById("cerrarModal").addEventListener("click",funcio(),false);


    }
    else{
        setCookie(user, 0, 365);

    }
  };

  function callback() {
    // Find modal body on the document
    var $currentDetailsModal = $('#explicacioJoc');

    // Clone modal and save copy
    var $cloneDetailsModal = $currentDetailsModal.clone();

    // Find links in this modal which open this modal again and bind this function to their click events
    $(".explicacioJoc", $cloneDetailsModal).click(callback);
}