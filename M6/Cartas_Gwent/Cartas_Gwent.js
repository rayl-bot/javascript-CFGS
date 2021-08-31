window.onload=function() {
	var cartas = [];
	var imgrepe = [];
	var img1 = document.querySelectorAll("img");
	var cartas2 = cartas;
	var partida =  [];
	var cart = 0;
	var compara = [];
	var partida2 = [];
	var a2 = [];
	var carta1;
	var carta2;

	for (var i = 0; i < 25; i++) {
		var meter = "img/img"+i+".png";
		cartas.push(meter);
	}
	window.onclick=function(event) {
		console.log(event);
		cart++;
		var id= event.target.id;
  			if (id == "f") {
  				añadir(9);
  				random(5);
  				copyarray();
  				sumar();
  				console.log(partida2);
  				random2(10);
  			}else if(id=="n") {
  				añadir(15);
  				random(8);
  				copyarray();
  				sumar();
  				random2(16);
  			}else{
  				añadir(19);
  				random(10);
  				copyarray();
  				sumar();
  				random2(20);
  			}
  			if (cart == 2) {
				var id1= event.target.title;
				carta1= event.target;
				mostrar(imgid);
  			}
  		}
	

	function mostrar(id) {
		var img=document.getElementById(id);
		var id = img.id;
		img.setAttribute("src",a2[id]);
	}

	function copyarray() {
		for (var i = 0; i < partida.length; i++) {
			partida2.push(partida[i]);
		}
	}

	function añadir(limite) {
		var div = document.createElement("div");
		document.body.appendChild(div);
		for (var i = 0; i <= limite; i++) {
			var img = document.createElement("img");
			img.title="img"+i;
			img.src="img/trasera.jpg";
			div.appendChild(img);
			imgrepe.push(img);
		}
		var div2 = document.createElement("div");
		document.body.appendChild(div2);
		var boton = document.createElement("button");
		boton.id="rein";
		boton.textContent="Reiniciar";
		div2.appendChild(boton);
		ocultar();
	}
	
	function ocultar() {
		var array = document.querySelectorAll(".boton");
		for (var i = 0; i < array.length; i++) {
			array[i].style.display="none";
		}
	}

	function random(limite) {
		var num = 0;
		for (var i = 0; i < 100; i++) {
			num = Math.floor(Math.random() * (cartas2.length - 0)) + 0;
			for (var j = 0; j <= cartas2.length; j++) {
				if (cartas2[j]=="img/img"+num+".png") {
					var poner = cartas2[j];
					cartas[j] = "a";
					partida.push(poner);
					break;
				}
			}
			if (partida.length == limite) {
				break;
			}
		}
		console.log(partida);
	}

	function sumar() {
		for (var i = 0; i < partida.length; i++) {
			partida2.push(partida[i]);
			console.log(partida2[i]);
		}
	}

	function random2(limite) {
		var num;
		do {
			num = Math.floor(Math.random() * (partida2.length - 0)) + 0;
			a2.push(partida2[num]);
			partida2.splice(num,1);
		}while(a2.length != limite);
	}

	document.querySelector("#rein").onclick=function() {
		location.reload();
	}
}