window.onload = function() {
  //Obtener todas las cookies
  var todasCookies = mostrar();

  /*

  console.log(JSON.parse(JSON.stringify(w)));

  var ranking = JSON.parse(JSON.stringify(w));
  var nombre = document.getElementById("nom");
  var valor = document.getElementById("valors");
*/
  /*for (var i = 0; i < ranking.length; i++) {
    nombre.innerHTML += ranking[i].Nom + "<br/>";
    valor.innerHTML += +ranking[i].Valor + "<br/>";
  }*/
  // Call addRow() with the table's ID
  //Seleccionamos la tabla
  let table = document.querySelector("table");
  //Indicamos los valores que tiene las cookies nuestro caso Nom,Valor
  let data =["Posicio","Nombre","Puntuació"];
  //let data =Object.keys(todasCookies[0]);
  generateTable(table, todasCookies);
  generateTableHead(table, data);
};
//Genera los nombres de las tablas es decir (Nom,Valor)
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
var clicks=1;
//Genera la tabla
function generateTable(table, data) {
  for (element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
    
      let text = document.createTextNode(element[key]);
      if(text.data == 0){
        text = document.createTextNode(clicks);
        clicks ++;
      }
      else{
        
      }
      console.log(element);
      cell.appendChild(text);
    }
  }
}


