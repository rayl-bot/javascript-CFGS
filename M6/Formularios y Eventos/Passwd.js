window.onload=function() {
	document.main.boton.onclick=function() {
		//al clickar al botón se iniciarán las siguiente funciones.
		espacioenblanco();
		validarvacio();
	}
//comprobará si hay espacios en blanco.
	function espacioenblanco() {
		var espacios = false;
		var cont = 0;
		 
		while (!espacios && (cont < p1.length)) {
		  if (p1.charAt(cont) == " ")
		    espacios = true;
		  cont++;
		}
		 
		if (espacios) {
		  alert ("La contraseña no puede contener espacios en blanco");
		  return false;
		}
	}
}