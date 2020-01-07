window.onload = function() {
  var w = mostrar();

  console.log(JSON.parse(JSON.stringify(w)));

  var ranking = JSON.parse(JSON.stringify(w));
  var nombre = document.getElementById("nom");
  var valor = document.getElementById("valors");

  for (var i = 0; i < ranking.length; i++) {
    nombre.innerHTML += ranking[i].Nom + "<br/>";
    valor.innerHTML += +ranking[i].Valor + "<br/>";
  }
  // Call addRow() with the table's ID
  /* let table = document.querySelector("table");
    let data = Object.keys(w[0]);
    generateTable(table, w);
    generateTableHead(table, data);
    */
};

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

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
