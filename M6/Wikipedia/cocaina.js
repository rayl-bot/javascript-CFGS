window.onload = function() {
var doctype = document.doctype.name;

if (doctype == null) {
  console.log("No contiene doctype.");
}else{
  console.log("Si que contiene doctype.");
}
//mostrar todos los p.
var contp = document.querySelectorAll("p");
var mcontp = "<strong>Hay "+contp.length+" ps en total.</strong>\n";



//mostrar todos los divs
var contdiv = document.querySelectorAll("div");
var mcontdiv = "<strong>Hay "+contdiv.length+" divs en total.</strong>\n";



//mostrar todas las imagenes
var contimg = document.querySelectorAll("img");
var mcontimg = "<strong>Hay "+contimg.length+" imagenes en total.</strong>\n";


//comprobar si tienen los atributos ALT
var contalt = buscaratr(contimg, "alt");
var mcontalt = contalt+" <strong>imagenes tienen el atributo 'alt'</strong>.\n";


//comprobar si tienen los atributos TITLE
var conttitle = buscaratr(contimg, "title");
var mcontitle = conttitle+" <strong>imagenes contienen el atributo 'title'</strong>.\n";


//pasamos la lista de atributos
var contid = document.querySelectorAll("[id]");
var repeid = comprobarid(contid);
var mrepeid = "<strong>Hay "+repeid+" ids repetidos.</strong>";


//bucle infinito.
/*var contclass = document.querySelectorAll("[class]");
console.log(contclass);

console.log(comprobarclass(contclass));*/

//comprobamos cada h1 del doucmento para comprobar que no hay ninguno repetido
//en caso de haber repetido, devolverá, "Incorrecto", y en caso contrario, "Correcto".
var conth1 = document.querySelectorAll("h1");
var mosh1 = contarh1(conth1.length);
if (mosh1) {
	var mmosh1 = "Incorrecto, hay más de un H1 en el documento.";
}else {
	var mmosh1 = "Correcto, solo hay un H1 en el documento.";
}


//con la siguiente variable, sacamos el nombre de clase del enlace base de la página,
// para posteriormente compararlo con el resto para decir si son externos o no.
var clenlace = document.getElementsByClassName("mw-jump-link");
//seleccionamos el href del primero enlace de esta clase.
var enlace = clenlace[0].href;
var final = "";
//bucle final que sacará los elementos del string hasta que encuantre un #, en ese caso
//parará.
for (var i = 0; i < enlace.length; i++) {
	if (enlace[i]!="#") {
		final = final+enlace[i];
	}else{
		break;
	}
}


//buscaremos dentro de todos los a, cada href, y se comparará el href con el enlace base,
//que indicará si es externo o no.
var numenlace = document.querySelectorAll("a");
//la función devolverá un valor entero.
var enext = enlaces(numenlace,true);
var enint = enlaces(numenlace,false);
//console.log("Hay "+numenlace.length+ " elementos a en el documento, de los cuales: "+enext+" son enlaces externos.");

//llamamos a la función que nos devolverá los title que hay en cada <a>.
/*var mostrar = mostrartitlea(numenlace);*/

var todotxt = mcontp+"<br>"+mcontdiv+"<br>"+mcontimg+"<br>"+mcontalt+"<br>"+mcontitle+"<br> <strong>H1 del documento: </strong>"+mmosh1+ "<br><strong>Cada uno de los datos de los enlaces: </strong>"+enext+
"<br><strong> Ahora se muestran los enlaces internos: </strong><br>"+enint;

escribirpp(todotxt);

//funcion para buscar cada atributo
	function buscaratr(valor,attr) {
		var contador = 0;
		var i = 0;
		for (i = 0; i <= valor.length-1; i++) {
			if (valor[i].getAttribute(attr)!= "") {
				contador++;
			}
		}
		return contador;
	}

	function comprobarid(valor) {
		var contid = 0;
		var idrepe = 0;
		for (var i = 0; i < valor.length-1; i++) {
			for (var j = i+1; j < valor.length; j++) {
			if (valor[i].id == valor[j].id) {
				idrepe++;
			}
		}
		contid++;
		}
		return idrepe;
	}

//bucle infinito.

/* 
	function comprobarclass(valor) {
		var tclass = 0
		var contclass = 0;
		var text = "Del tipo de clase: "+tclass+" hay "+contclass+" en total.";
		var arrayclass = [];
		for (var i = 0; i < valor.length-1; i++) {
			contclass = 0;
			for (var j = 1; j < valor.length; j++) {
				tclass = i;
				if (valor[i].className == valor[j].className) {
					contclass++;
				}
			}
			text = text+" ";
			console.log(tclass);
		}
		return text;
	}
	*/

	function contarh1(valor){
		var text;
		if (valor.length > 1) {
			return true;
		}else {
			return false;
		}
	}

	/*TIENES QUE MOSTRAR LOS TITULOS EN LISTA, PUTO*/
	function enlaces (valor, externo) {
		var enlaceext = 0;
		var enlacenoext = 0;
		var txtexterno = "";
		var txtinterno = "";
		for (var i = 0; i <= valor.length-1; i++) {
			if (valor[i].href.includes(final)) {
				enlacenoext++;
				txtinterno = txtinterno+" Enlace numero: "+i+" "+valor[i]+"\n"+valor[i].title+"\n";
			}else if (valor[i].href.includes("http:")) {
				enlaceext++;
                txtexterno = txtexterno+" <u>Enlace numero: "+i+" "+valor[i]+"     "+valor[i].title+"</u><br>";
			}else {
				enlaceext++;
				txtexterno = txtexterno+" Enlace numero: "+i+" "+valor[i]+"    "+valor[i].title+"<br>";
			}
		}
		var text1 = "Hay "+valor.length+ " elementos <a> en el documento, de los cuales: "+enlaceext+" son enlaces externos.\n"+
			"Datos de los elementos: "+txtexterno;
		var text2 = "Hay "+valor.length+ " elementos <a> en el documento, de los cuales: "+enlaceext+" son enlaces externos.\n"+
			"Datos de los elementos: "+txtinterno;
		if (externo) {
			return text1;
		}else{
			return text2;
		}
	}

	function escribirpp (valor) {
		document.getElementById('final').innerHTML="<br>"+valor;
	}
}