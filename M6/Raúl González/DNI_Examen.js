window.onload=function() {
	//declaro las variables necesarias para hacer las comprbaciones.
	var numero = prompt("introduce un numero");
	var letra = prompt("introduce una letra");
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'I', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	//funcion que comprueba que el numero este entre los parametros acordados.

	if (numero<0 || numero > 99999999) {
		console.log('No has introducido un valor valido.');
	}else {
		var compara = calcular(numero);
		comparar(letra,compara);
	}
	//con esta funcion saco el numero que se representa en la array.
	function calcular(numero) {
		//con el siguiente if compruebo que numero es un entero y no un string.
		if (numero*0 != 0) {
			console.log("esto es un string");
		}else {
			var valor = numero%23;
		}
		var result = letras[valor];
		return result;
	}

	function comparar(valor1, valor2) {
		console.log(valor1.length);
		if (valor1.length > 1) {
			console.log("solo puedes introducir una letra.");
		}else if(valor1==valor2){
			alert("Es correcto.");
		}else {
			alert("Las letras no coinciden.");
		}
	}

}