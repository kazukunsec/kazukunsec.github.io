window.onload = function() {
    var count = 0;

    // Mostrar els dos cercles simulant els altaveus
    mostrarInici();
    cambiarNumero(count);

    document.getElementById('adelante').onclick = function () {
        // Següent diapositiva
        count = animacionDelante(count);
    }

    document.getElementById('atras').onclick = function () {
        // Anterior diapositiva
        count = anmacionAtras(count);
    }

}

function animacionDelante(count) {    
    var currentLeft = parseInt(document.getElementsByClassName("vl")[0].style.left) || 27;
    var valor = currentLeft;

    count ++;

    // Moure la linea verda per mostrar per quina diapo va l'usuari
    if (count == 1) {
        valor = currentLeft + 6.5 + "vh";
    }
    else if (count > 1 && count <= 10) {
        valor = currentLeft + 7.5 + "vh";
    }
    else {
        valor = 27 + "vh";
        count = 0;
    }

    document.getElementsByClassName("vl")[0].style.left = valor;

    // Mostrar el pdf corresponent
    mostrarPDF(count);

    // Canviar el número de la diapo per la que vas
    cambiarNumero(count);

    return count;
}

function anmacionAtras(count) {

    if (count !== 0) {

        count --;

        var currentLeft = parseInt(document.getElementsByClassName("vl")[0].style.left) || 27;
        var valor = currentLeft;
    
        if (count === 2) {
            valor = currentLeft - 6.5 + "vh";
        }
        else if (count >= 1 && count <= 10) {
            valor = currentLeft - 7.5 + "vh";
        }
        else {
            valor = 27 + "vh";
            count = 0;
        }
    
        document.getElementsByClassName("vl")[0].style.left = valor;
    
        mostrarPDF(count);
    
        cambiarNumero(count);
    }

    return count;
}

function mostrarPDF(count) {
    var imgURL = ""
    var divPresentacio = document.getElementById("presentacio");

    if (count > 0) {
        imgURL = "./img/pdf/pp_" + count + ".jpg";       
        divPresentacio.className = "imgPresentacio";
        divPresentacio.style.backgroundImage = "url(" + imgURL + ")";
        divPresentacio.style.backgroundRepeat = "no-repeat";
        divPresentacio.style.backgroundPosition = "center";
        divPresentacio.style.backgroundSize = 52 + "%";
    }
    else {
        divPresentacio.style.backgroundImage = imgURL;
    }

}

function mostrarInici() {
    var divCircle = document.getElementById("iniciPresentacio");
    
    for (var i=0; i<2; i++) {
        var circle = document.createElement('div');
        circle.setAttribute('class', 'circles');
        divCircle.appendChild(circle);
    }
}

function cambiarNumero(count) {
    var divBoxNumero = document.getElementById('box_numero');
    var existNumeroCount = document.getElementById('numeroCount');

    if (existNumeroCount) {
        existNumeroCount.parentNode.removeChild(existNumeroCount);
    }

    var divNumeroCount = document.createElement('div');

    divNumeroCount.setAttribute('id', 'numeroCount');
    divBoxNumero.appendChild(divNumeroCount);

    var afegirCount = document.createTextNode(count);
    divNumeroCount.appendChild(afegirCount);
}