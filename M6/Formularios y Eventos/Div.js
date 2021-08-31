window.onload=function() {
	document.querySelector("#div1").style.opacity=0;
	document.querySelector("#div2").style.opacity=0;
	var opac = 0;
	//funcion que al hacer click hace aparecer los divs, uno normal y otro con delay.
	document.main.mostrar.onclick=function() {
		document.querySelector("#div1").style.opacity=1;//aqui simplement cambiamos la opacidad.
		//el método interval, es parecido al set time, pero este se repite en forma de bucle hasta que se le indique que pare.
			var interval = setInterval(function(){
				opac = opac+0.1;
				document.querySelector("#div2").style.opacity = opac;
				if (opac == 1) {
					clearInterval(interval);//con esta función hacemos que pare 
				}
    		}, 100);
	}
}