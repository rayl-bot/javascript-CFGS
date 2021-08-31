window.onload=function() {
	var contador = 0;
	//funcion para que cuando des click a el boton, añadir los parametros en variables.
	document.querySelector("#boton").onclick = function() {
		var tipo = document.querySelector("#tipo").value;
		var nombre = document.querySelector("#nombre").value;
		var cod = document.querySelector("#cod").value;
		if (cod>=1 && cod<=999999999 ) {
		var cant = document.querySelector("#cant").value;
		//aquí creamos el objeto
		var p = new producto(tipo,nombre,cod,cant);
		}else {
			console.log("El codigo no es valido, vuelve a introducir otro.");
		}
		localStorage1(p);

	}
	//funcion que utilizaremos para añadir los parametros al objeto.
	function producto(tipo, nombre, cod, cant) {
		this.tipo = tipo;
		this.nombre = nombre;
		this.cod = cod;
		this.cant = cant;
	}
	//funcion que compara y añade los objetos al localsStorage
	function localStorage1(objeto) {
		//la primera vez que se ejecute añadirá el primer objeto si o si
		if (localStorage.length == 0) {
				var obj = JSON.stringify(objeto);
				var localStoragename = "producto" + contador;
				localStorage.setItem(localStoragename,obj);
				contador++;
		}//si no es la primera vez, hará un bucle que irá recorriendo el localStorage
		else {
			for (var i =  0; i <= localStorage.length; i++) {
			var ls = localStorage.getItem("producto"+i);
			var localok = JSON.parse(ls);
			//primero comprobamos que el valor no sea nulo.
				if(localok != null){
					//si no es nulo, compararemos el valor cod, 
					//si es igual nos añadirá una tabla al final del fichero 
					//indicandonos el valor que estaba con ese identificador.
						if (localok.cod == objeto.cod) {
						document.querySelector("#mostrar").innerHTML = "<table><tr><td>tipo</td><td>nombre</td><td>cod></td><td>cant</td></tr><tr><td>"+localok.tipo+"</td><td>"+localok.nombre+"</td><td>"+localok.cod+"</td><td>"+localok.cant+"</td></tr></table>";
						break;
					}else {
						//y en el caso de que no sean iguales, añadirá el objeto como si nada.
						var obj = JSON.stringify(objeto);
						var localStoragename = "producto" + contador;
						localStorage.setItem(localStoragename,obj);
						contador++;
					}
				}
			}	
		}
	}
}