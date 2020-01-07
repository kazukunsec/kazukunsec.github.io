var vegades = 0;
var puntuacio = 0;
var result = false;
var temp = "";
var resultatAnterior=0;

window.onload = function() {
    var v_paraules = [
        ["Micròfon", "Ones sonores", "Espectre electromagnètic"],
        ["Antena", "Amplificador modulador", "Modulació", "Membrana de plàstic", "Transmissor", "Procesador d'audio", "Excitament", "Preamplificador d'autofreqüència", "Ones portadores", "AM i FM"],
        ["Auriculars", "Mesclador", "Secció IF", "Secció RF", "Filtre IF", "Secció de so", "Amplificador IF", "Ressonància elèctrica", "Canal d'ampli espectre", "Canal de banda petita", "Canal de banda ultrapetita"]
    ];

    var v_emissio = v_paraules[0];
    var v_transmissio = v_paraules[1];
    var v_receptor = v_paraules[2];
    //Obtenemos el resultado anterior
    resultatAnterior=this.parseInt(temp[0].idcard );

    // Ensenyar modal: explicacio del joc
    $('#explicacioJoc').modal("show");
    
    temp = getCookie();

    // Ensenyar modal: explicacio del joc
    if(temp!=null){
        console.log(temp[0].name+temp[0].idcard);
    }
    document.getElementById("score").innerHTML= resultatAnterior;
    var v_paraulesJuntes = juntarParaules(v_paraules);
    var paraulaEscollida = paraulaRandom(v_paraulesJuntes);
    calcularResultat(result);

    document.getElementById('boxEmissio').onclick = function () {
        var boxEmissio = document.getElementById('boxEmissio');

        // Mirar si l'opció es la correcte
        result = comprovarEmissio(paraulaEscollida, v_emissio);
        calcularResultat(result);

        if (result) {
            // Com es correcte, canviar el color a ver i buscar una nova paraula
            boxEmissio.style.backgroundColor = "#57B053";

            v_paraulesJuntes = paraulaRepetida(v_paraulesJuntes, paraulaEscollida);
            paraulaEscollida = opcioCorrecta(v_paraulesJuntes);

            result = false;
            vegades ++;
        }
        else {
            boxEmissio.style.backgroundColor = "#333333";
        }
    }

    document.getElementById('boxTransmissio').onclick = function () {
        var boxTransmissio = document.getElementById('boxTransmissio');

        result = comprovarTransmissio(paraulaEscollida, v_transmissio);
        calcularResultat(result);

        if (result) {
            boxTransmissio.style.backgroundColor = "#57B053";

            v_paraulesJuntes = paraulaRepetida(v_paraulesJuntes, paraulaEscollida);
            paraulaEscollida = opcioCorrecta(v_paraulesJuntes);

            result = false;
            vegades ++;
        }
        else {
            boxTransmissio.style.backgroundColor = "#333333";
        }
    }

    document.getElementById('boxReceptor').onclick = function () {
        var boxReceptor = document.getElementById('boxReceptor');

        result = comprovarReceptor(paraulaEscollida, v_receptor);
        calcularResultat(result);

        if (result) {
            boxReceptor.style.backgroundColor = "#57B053";

            v_paraulesJuntes = paraulaRepetida(v_paraulesJuntes, paraulaEscollida);
            paraulaEscollida = opcioCorrecta(v_paraulesJuntes);

            result = false;
            vegades ++;
        }
        else {
            boxReceptor.style.backgroundColor = "#333333";
        }
    }

}

function juntarParaules(v_paraules) {
    var v_total = [];

    for (var i=0; i<v_paraules.length; i++) {
        for (var j=0; j<v_paraules[i].length; j++) {
            v_total.push(v_paraules[i][j]);
        }
    }

    return v_total;
}

// Buscar una nova paraula random
function paraulaRandom(v_paraules) {
    var random = null;
    
    if (v_paraules.length > 0) {
        random = v_paraules[Math.floor(Math.random()*v_paraules.length)];
    
        var txtParaula = document.getElementById("txtParaula");
        txtParaula.innerHTML = random;
    }

    return random;
}

function comprovarEmissio(paraulaEscollida, v_emissio) {
    result = false;

    v_emissio.forEach(e => {
        if (e === paraulaEscollida) {
            result = true;
        }
    });

    return result;
}

function comprovarTransmissio(paraulaEscollida, v_transmissio) {
    result = false;

    v_transmissio.forEach(e => {
        if (e === paraulaEscollida) {
            result = true;
        }
    });

    return result;
}

function comprovarReceptor(paraulaEscollida, v_receptor) {
    result = false;

    v_receptor.forEach(e => {
        if (e === paraulaEscollida) {
            result = true;
        }
    });

    return result;
}

// Eliminar la paraula ja sortida de l'array
function paraulaRepetida(v_paraulesJuntes, paraulaEscollida) {
    var i = v_paraulesJuntes.indexOf(paraulaEscollida);
    v_paraulesJuntes.splice(i, 1);

    return v_paraulesJuntes;
}

function opcioCorrecta(v_paraulesJuntes) {
    paraulaEscollida = paraulaRandom(v_paraulesJuntes);

    var boxEmissio = document.getElementById('boxEmissio');
    var boxTransmissio = document.getElementById('boxTransmissio');
    var boxReceptor = document.getElementById('boxReceptor');

    setTimeout( function () {
        boxEmissio.style.backgroundColor = "#C00000";
        boxTransmissio.style.backgroundColor = "#C00000";
        boxReceptor.style.backgroundColor = "#C00000";
    
        // Acaba el joc o quan s'acabin les paraules o quan arribi a 15 paraules
        if (paraulaEscollida == null || vegades === 15) {
            endGame();
        }
    }, 500);

    return paraulaEscollida;
}

function calcularResultat(result) {
    if (result) {
        puntuacio ++;
    }
    else {
        if (puntuacio > 0) {
            puntuacio --;
        }
    }

    var score = document.getElementById("score");
    score.innerHTML = puntuacio+resultatAnterior;
}

function endGame() {
    // Ensenyar modal: final del joc
    $('#modalFinal').modal("show");

    temp[0].idcard = temp[0].idcard + parseInt(document.getElementById("score").innerHTML);
    
	setCookie(temp[0].name,temp[0].idcard,365);
}