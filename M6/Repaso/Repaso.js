window.onload=function() {

	var personas = [];


	document.querySelector("#boton").onclick= function(){
		document.querySelector("#main").style.display = "block";
		document.querySelector("#boton").style.display = "none";
		document.querySelector("#datos").style.display = "block";
	}
	
	document.querySelector("#datos").onclick=function(){
		var main = document.querySelector("#main");
		var nombre = main.nombre.value;
		var dir = main.dir.value;
		var dni = main.dni.value;
		var ciudad = main.dni.value;
		var email = main.email.value;
		var Persona = new persona(nombre,dir,dni,ciudad,email);
		personas.push(Persona);
		console.log(Persona);
		mostrar(Persona);
		document.querySelector("#datos").style.display = "none";
		document.querySelector("#main").style.display = "none";
	}

	function persona(nombre, dir, dni, ciudad, email){
   		this.nombre=nombre;
   		this.dir=dir;
   		this.dni = dni;
   		this.ciudad = ciudad;
   		this.email = email;
	}

	function mostrar(obj){
		document.body.innerHTML="Nombre: "+obj.nombre+" Direccion: "+obj.dir+" DNI: "+obj.dni+" Ciudad: "+obj.ciudad+" Email: "+obj.email;
	}


}