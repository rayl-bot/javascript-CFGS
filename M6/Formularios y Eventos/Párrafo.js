window.onload=function() {
	var colores = ["#FC0000", "#40D318", "#18D3A3", "#842464"];
	var p = document.createElement("p");
	document.querySelector("#par2").style.display="none";

	window.onclick=function(event){
		//elegirá un color de la array aleatorio al hacer click encima.
		if (event.target.id=="par1") {
			var random = Math.floor(Math.random() * (colores.length - 0)) + 0;
			document.querySelector("#par1").style.color=colores[random];
		}
	}

	window.ondblclick=function(event) {
		//cuando hagas doble cick desaparecerá el párrafo y aparecerá otro
		if (event.target.id == "par1") {
			document.querySelector("#par1").style.display="none";
			document.querySelector("#par2").style.display="block";
		}
		//y cuando le des doble click al otro párrafo aparecerá el anterior
		if (event.target.id == "par2") {
			document.querySelector("#par1").style.display="block";
			document.querySelector("#par2").style.display="none";
		}
	}
	//funcion que deshabilita el boton derecho del ratón.
	window.oncontextmenu=function() {
		alert("BOTON DERECHO DEL RATÓN DESHABILITADO.");
		return false;
	}	
	//cuando pasen el raton por encima, se añadirá un parrafo que ponga que está dentro
	window.onmouseover=function(event) {
		if (event.target.id=="par1") {
			p.textContent="Estas dentro";
			document.body.appendChild(p);
		}
	}
	//cuando el raton no este por encima, se cambiará el anterior párrafo diciendo que está fuera
	window.onmouseout=function(event) {
		if (event.target.id=="par1") {
			p.textContent="Estas fuera";
		}
	}
}