window.onload=function() {
	var cont = 0;//variable de contador que utilizaré para contar cuantos click hace el usuario.
	var puntos = 0;
	var limite = 0;
	var cartas = [];
	var cartas2 = [];
	var a2 = [];
	var copia = [];
	var final = [];
	var c1;
	var c2;
	img();//funcion a la que llamo para introducir las cartas en la array principal.
	//Evento que a partir del event, selecciono todos los elementos que necesitaré durante la actividad.
	window.onclick=function(event) {
		cont++;//contador incrementa
		if (event.target.id == "f") {//condicional para comprobar que id tiene el boton
			traseras(10);
			limite = 5;//marcamos el limite a 5
			rellenar(limite);
			otraarray(5);
			introduceimg(5);
			ocultar();
		}else if(event.target.id == "n"){
			traseras(16);
			limite = 8;//marcamos el limite a 8
			rellenar(limite);
			otraarray(8);
			introduceimg(8);
			ocultar();
		}else if(event.target.id == "d"){
			traseras(20);
			limite = 10;//marcamos el limite a 10
			rellenar(limite);
			otraarray(10);
			introduceimg(10);
			ocultar();
		}

		if(cont == 2) {//condicional que comprobará el número de click
			//si hay dos, significa que hemos seleccionado la primera carta, con lo cual, llamará alas debidas funciones.
			var id1 = event.target.id;
			c1 = event.target;
			mostrar(id1);
		}else if(cont == 3) {//condicional que hace referencia al tercer click, es decir, a la segunda carta
			var id2 = event.target.id;
			c2 = event.target;
			mostrar(id2);
			iguales(c1,c2);
			cont = 1;
		}
		//condicion que ejecutará el reset de la página
		if (event.target.id == "reset") {
			location.reload();
		}
	}
	//funcion que mostrará las cartas al revés.
	function traseras(limite) {
		var div = document.createElement("div");
		for (var i = 0; i < limite; i++) {
			var img = document.createElement("img");
			var src = "img/trasera.jpg";
			var id = i;
			img.src = src;
			img.id = id;
			div.appendChild(img);
		}
		document.body.appendChild(div);//Añado un div con las cartas ya insertadas.
	}
	//funcion para ocultar el h2 y los botones.
	function ocultar() {
		var array = document.querySelectorAll(".boton");
		var h2 = document.querySelector("h2");
		for (var i = 0; i < array.length; i++) {
			array[i].style.display="none";
		}
		h2.style.display="none";
	}
	//funcion para introducir las imagenes en una array
	function img() {
		for (var i = 0; i < 25; i++) {
			cartas.push('img/img'+i+'.png');
		}
	}
	//funcion que rellena otra array con un limite marcado dependiendo de que opcion escojamos.
	function rellenar(limite){
		var num;
		do {
			num = Math.floor(Math.random() * (cartas2.length - 0)) + 0;
			cartas2.push(cartas[num]);
			cartas.splice(num,1);
		}while(cartas2.length != limite);
		copyarray();
	}

	//copiamos la array cartas2 para poder hacer bien la siguiente funcion.
	function copyarray() {
		for (var i = 0; i < cartas2.length; i++) {
			copia.push(cartas2[i]);
		}
	}

	//funcion que rellenará otra array con el mismo limite seleccionado antes y que cogerá los datos de la anterior array, y los introducirá con un random.
	function otraarray(limite) {
		var num;
		do {
			num = Math.floor(Math.random() * (copia.length - 0)) + 0;
			a2.push(copia[num]);
			copia.splice(num,1);
		}while(a2.length != limite);
	}
	//funcion que añadirá a una array final todas las cartas que se han introducido en las dos anteriores arrays.
	function introduceimg(cartas) {
		for (var i = 0; i < cartas; i++) {
			final.push(a2[i]);
		}
		for (var i = 0; i < cartas; i++) {
			final.push(cartas2[i]);
		}
	}
	//funcion que mostrará la carta dependiendo del id que se haya introducido por parámetro.
	function mostrar(id) {
		var m = document.getElementById(id);
		m.setAttribute("src", final[id]);
	}
	//funcion que comprobará que dos cartas son iguales o no
	function iguales(c1,c2){
		if (c1.src != c2.src) {//en caso de no ser iguales, con in settimeour se volverá a cambiar el src de la imagen dentro del tiempo especificado.
			setTimeout(function(){ 
				c1.setAttribute("src",'img/trasera.jpg');
				c2.setAttribute("src",'img/trasera.jpg'); 
				}, 3000);
		}else {
			puntos++;//en caso de que si lo sea, la variable de puntos se imcrementará
		}

		if (puntos==limite) {//en caso de que la variable de puntos sea la misma al limite de cartas
			//es decir, ya no queden mas cartas que girar, se introducirá un texto diciendo que has ganado, junto con el boton de reset
			var reset = document.createElement("button");
			var id = "reset";
			reset.textContent= "Resetear";
			reset.id = id;
			var h2 = document.createElement("h2");
			h2.textContent = "Has ganado!!";
			document.body.appendChild(h2);
			document.body.appendChild(reset);//Este boton una vez se pulse, se realizará un location.reload que hará que vuelva al principio.
		}
	}
}