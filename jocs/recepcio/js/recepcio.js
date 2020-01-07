window.onload=function(){
	$('#explicacioJoc').modal("show");

	canvidePuzzle();

	// Esperar a que es tanqui el modal per iniciar el joc
	$('#explicacioJoc').on('hidden.bs.modal', function (e) {
		
		updateClock();
		
		// Inici del joc
		setTimeout(() => {
			starGame();
		}, 1000);
	})
	
}

// Agafar totes les peces
const tiles = Array.from(document.querySelectorAll(".tile"));
const emptyTile = document.querySelector(".tile--empty");

var totalTime = 120;
var puntuacion = 0;

// Random img
var imgArr = ['./img/recep_1.jpg','./img/recep_2.jpg', './img/recep_3.jpg', './img/recep_4.jpg'];
var selectBG;

function canvidePuzzle(){
	selectBG = imgArr[Math.floor(Math.random() * imgArr.length)];
	document.getElementById('answer').style.background='url('+selectBG+')';
	document.getElementById('answer').style.backgroundSize="100%";
	var list=document.getElementsByClassName('tile');
	for(var i=0; i<list.length; i++){
		list[i].style.background='url('+selectBG+')';
		list[i].style.backgroundSize="300%";

		switch (i) {
			case 0:
				list[i].style.backgroundPosition = "top left";
				break;
			case 1:
				list[i].style.backgroundPosition = "top center";		  
				break;
			case 2:
				list[i].style.backgroundPosition = "top right";
				break;
			case 3:
				list[i].style.backgroundPosition = "center left";
				break;
			case 4:
				list[i].style.backgroundPosition = "center";		  
				break;
			case 5:
				list[i].style.backgroundPosition = "center right";
				break;
			case 6:
				list[i].style.backgroundPosition = "bottom left";
				break;
			case 7:
				list[i].style.backgroundPosition = "bottom center";		  
				break;
			case 8:
				list[i].style.backgroundPosition = "bottom right";
				break;
			default:
				break;
		}
	}
}
// A key / value store of what areas to "unlock"
const areaKeys = {
	A: ["B", "D"],
	B: ["A", "C", "E"],
	C: ["B", "F"],
	D: ["A", "E", "G"],
	E: ["B", "D", "F", "H"],
	F: ["C", "E", "I"],
	G: ["D", "H"],
	H: ["E", "G", "I"],
	I: ["F", "H"]
};

// Afegir event click a les peces
tiles.map(tile => {
	tile.addEventListener("click", event => {
		// Agafar l'area on es troben les peces que es canviaran
		const tileArea = tile.style.getPropertyValue("--area");
		const emptyTileArea = emptyTile.style.getPropertyValue("--area");

		// Canviar la peça seleccionada per la predefinida
		emptyTile.style.setProperty("--area", tileArea);
		tile.style.setProperty("--area", emptyTileArea);

		// Comprovar si s'ha completat el puzzle
		isComplete(tiles);
	});
});

const isComplete = tiles => {
	
	// Observar la posicio de cada peça
	const currentTilesString = tiles
		.map(tile => tile.style.getPropertyValue("--area").trim())
		.toString();

	// Comparar la posicio de les peces amb la posicio correcta
	if (currentTilesString == Object.keys(areaKeys).toString()) {
		
		document.getElementById("correcte").style.display="block";
		var index = imgArr.indexOf(selectBG);
		if (index > -1) {
			imgArr.splice(index, 1);
		}
		document.getElementById('score').innerHTML = puntuacion+=5;
		if(puntuacion===20){
			finalJuego();
		}
		setTimeout(() => {
			canvidePuzzle();
			starGame();
			document.getElementById("correcte").style.display="none";
		}, 1500);
		
	}
};

// Barrejar posicions
const shuffledKeys = keys => Object.keys(keys).sort(() => .5 - Math.random());

function starGame(){
	// Begin with our in order area keys
	let startingAreas = Object.keys(areaKeys);
	startingAreas = shuffledKeys(areaKeys);
	
	// Apply shuffled areas
	tiles.map((tile, index) => {
		tile.style.setProperty("--area", startingAreas[index]);
	});
}

// Compte enrere
function updateClock(){
	
	document.getElementById('countdown').innerHTML = totalTime;
  	if (totalTime == 0) {
		finalJuego();
	}
	else if (puntuacion === 20) {
		totalTime=totalTime;
	}
	else {
		totalTime -= 1;
		setTimeout("updateClock()",1000);
  	}
}

var temp = getCookie();

if (temp != null) {
	console.log(temp[0].name+temp[0].idcard);
}

function finalJuego() {
	$('#modalFinal').modal("show");

	temp[0].idcard = temp[0].idcard + parseInt(document.getElementById("score").innerHTML);

	setCookie(temp[0].name,temp[0].idcard,365);
}