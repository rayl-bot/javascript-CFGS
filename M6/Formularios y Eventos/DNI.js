window.onload=function(){
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'I', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	document.main.validar.onclick=function() {
		var dni = document.main.dni.value;
		var tel = document.main.tel.value;
		var numeros = false;
		var letra = false;
		var error = 0;
		//al hacer click en el boton hará el siguiente control de errores.
		if (dni.length == 9) {//comprobará que el length es 9
				for (var i = 0; i < 9; i++) {//hará un bucle para comprobar cada posiciono
				var compr = dni.charAt(i);
				var num = parseInt(compr);//la pasa a int
				if (i < 8) {//comprueba las primeras 8 posiciones
					if(Number.isInteger(num)){//si es entero numero = true
						numeros = true;
					}else {
						error++;//sino, se añade un error
					}
					if (error <= 8 && error > 0) {//si hay algun error saldrá el siguiente mensaje
						alert("DEBEN SER PRIMERO 8 NUMERO Y UNA LETRA");
					}
				}else if(!Number.isInteger(num)) {//si la posicion 9 es una letra
						letra=true;
					
				}else {//sino mostrará el siguiente mensaje de error
					alert("DEBEN SER PRIMERO 8 NUMERO Y UNA LETRA");
				}
			}
			if (numeros && letra) {//si tanto numero como letra estan en true
				var result = comprobacion(dni);//se llama a la funcion que comprobará el dni
					if (result) {//si el resultado es true devolverá esto:
					alert("DNI CORRECTO!!!");
					}else {//si es false, esto:
						alert("DNI INCORRECTO!!!");
					}
				}
			}else{//si no introduces 9 números
					alert("DEBES INTRODUCIR 9 VALORES");
				}

		tel = tel.split(" ");//separamos el numero de telefono del identificador.
		tel[1] = parseInt(tel[1]);
		if (tel[0].includes("+")) {//si el identificador tiene un + delante es que es correcto.
			if (tel[1].length == 9) {//si el numero tiene 9 de longitud entra
				if (Number.isInteger(tel[1])) {//si es unn numero mostrará el mensaje
					alert("NÚMERO CORRECTO!");
				}else {//sino este
					alert("DEBES INTRODUCIR UN NÚMERO");
				}
			}else {//si no tiene 9 carácteres
				alert("EL NÚMERO DE TELÉFONO DEBE TENER 9 CARÁCTERES.");
			}
		}else {//si el prefijo está mal.
			alert("EL PREFIJO NACIONAL NO ES CORRECTO.");
		}
	}

	function comprobacion(dni) {
		var array=dni.split("");
		var numtotal="";
		var letra;
		for (var i = 0; i < array.length; i++) {
			if (i<8) {
				numtotal=numtotal+array[i];
			}else{
				letra=array[i];
			}
		}
		numtotal = parseInt(numtotal);
		letra = letra.toUpperCase();
		if (letras[numtotal%23] == letra ) {
			return true;
		}else {
			return false;
		}
	}

}