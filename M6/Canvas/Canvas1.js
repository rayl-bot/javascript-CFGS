window.onload=function() {

	document.querySelector("#ej1").addEventListener("click", Ejercicio1);
	document.querySelector("#ej2").addEventListener("click", Ejercicio2);
	document.querySelector("#ej3").addEventListener("click", Ejercicio3);
	document.querySelector("#ej4").addEventListener("click", Ejercicio4);

	function Ejercicio1(){
		borrar();
		var canvas1 = document.getElementById("myCanvas");
		var lienzo = canvas1.getContext("2d");
		lienzo.globalAlpha = 1;
		var opac = 0.5;
		lienzo.fillStyle = "#FF0000";
		lienzo.fillRect(10,10,70,70);
		lienzo.globalAlpha=opac;
		lienzo.fillStyle = "blue"; 
		lienzo.fillRect(35,35,70,70);
	}

	function Ejercicio2(){
		borrar();
		var canvas = document.querySelector("#myCanvas");
		var lienzo = canvas.getContext("2d");
		lienzo.fillStyle="#4985D5";
		lienzo.beginPath();
		lienzo.moveTo(100,50);
		lienzo.lineTo(135,10);
		lienzo.lineTo(135,90);
		lienzo.fill();
	    lienzo.closePath();
	    lienzo.stroke();
	}

	function Ejercicio3(){
		borrar();
		var canvas = document.querySelector("#myCanvas");
		var lienzo = canvas.getContext("2d");
		lienzo.beginPath();
		lienzo.arc(95, 95, 70, 0, 2 * Math.PI);
		lienzo.stroke();
		lienzo.beginPath();
		lienzo.arc(70, 70, 10, 0, 2 * Math.PI);
		lienzo.stroke();
		lienzo.beginPath();
		lienzo.arc(120, 70, 10, 0, 2 * Math.PI);
		lienzo.stroke();
		lienzo.beginPath();
		lienzo.arc(95, 95, 40, 0, 1 * Math.PI);
		lienzo.stroke();
	}

	function Ejercicio4(){
		borrar();
		var canvas = document.querySelector("#myCanvas");
		var lienzo = canvas.getContext("2d");
		lienzo.fillStyle="#608BC3";
		lienzo.beginPath();
		lienzo.moveTo(30,30);
		lienzo.lineTo(140,30);
		lienzo.lineTo(30,140);
		lienzo.fill();
		lienzo.closePath();
		lienzo.stroke();
		lienzo.beginPath();
		lienzo.moveTo(170,170);
		lienzo.lineTo(60,170);
		lienzo.lineTo(170,60);
		lienzo.closePath();
		lienzo.stroke();
	}

	function borrar() {
		var canvas1 = document.getElementById("myCanvas");
		var lienzo = canvas1.getContext("2d");
		lienzo.clearRect(0, 0, canvas1.width, canvas1.height);
	}
}