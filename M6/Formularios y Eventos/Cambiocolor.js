window.onload=function() {
	var inputs = document.querySelectorAll("input");
	//una simple funcion que al hacer click en el boton se cambia de color 
	//dependiendo de si está vacío o no.
	document.main.boton.onclick=function() {
		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].value != "") {//comprueba que no está vacío
				inputs[i].style.background = "white";//si  no lo está lo pinta de blanco.
			}else {
				inputs[i].style.background = "blue";//si está vacío lo pinta de azul.
			}
		}
	}
}