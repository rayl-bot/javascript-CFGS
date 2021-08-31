window.onload=function() {

	document.main.enviar.onclick=function(event) {
		var column = document.main.colum.value;
		var filas = document.main.filas.value;
		var table = document.createElement("table");
		var div = document.createElement("div");
		console.log(column);
		column = parseInt(column);
		filas = parseInt(filas);
		//comprobará que las columnas sean mayores que 0
		if (column>0 && filas>0) {
				if (Number.isInteger(column) && Number.isInteger(filas)) {//comprobará si son numeros
					if (column<30 && filas<30) {
						document.body.appendChild(div);//añade el div para introducir la talba
						div.appendChild(table);
						for (var i = 0; i < filas; i++) {//for que irá introduciendo las celdas tr
						var fil = document.createElement("tr");
						var id = "tr"+i;
						fil.setAttribute("id",id);
							if (i%2 == 0) {//si son pares, se pintarán de rojo
								fil.style.background="red";
							}else {//si no de verde
								fil.style.background="green";
							}

						for (var j = 0; j < column; j++) {//for que irá introduciendo las celdas td
							var col = document.createElement("td");
							var id2 = "td"+i;
							col.setAttribute("id",id2);
							fil.appendChild(col);
							if (i%2==0) {//si son pares, se pintarán de rojo
									fil.style.background="red";
								}else {//si no de verde
									fil.style.background="green";
								}
						}
						table.appendChild(fil);
					}
				}else {
					alert("No puedes introduci más de 30 filas o coulmnas");
				}
			}else {
				alert("Solo puedes introducir números.");
			}
		}else {
			alert("No pueden ser números negativos.");
		}
	}
	//cuando seleccionas columnas pone rojo
	document.main.colum.onfocus=function() {
		var column = document.main.colum;
		column.style.background="red";
	}
	//cuando seleccionas fila se pone amarillo
	document.main.filas.onfocus=function() {
		var filas = document.main.filas;
		filas.style.background="yellow";
	}
	//cuando dejas de seleccionar columnas se pone naranja
	document.main.colum.onblur=function() {
		var column = document.main.colum;
		column.style.background="orange";
	}
	//cuando dejas de seleccionar filas se pone naranja
	document.main.filas.onblur=function() {
		var filas = document.main.filas;
		filas.style.background="orange";
	}
}