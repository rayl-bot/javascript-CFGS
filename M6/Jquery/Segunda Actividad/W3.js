$(document).ready(function(){
	/*Hi ha un sidebar amagat per defecte:
		Volem que es faci visible al fer click a ☰ situat al top menu.
		Un cop visible, que s’amagui al fer click a “Close menu”.
		L’efecte de fer visible i amagar, s’ha de fer amb una mateixa funció o mètode.*/

		//Mostrar y ocultar a la vez
		$("#menuu").click(function(){
			$("#mySidebar").toggle("fast");
		});

		$("#closee").click(function(){
			$("#mySidebar").toggle("fast");
		});


	/*Hi ha d’haver un efecte de zoom al situar el ratolí a sobre de les imatges dels plats.
		al treure el ratolí de les imatges l’efecte de zoom ha de desaparèixer progresivament
		https://www.w3schools.com/css/css3_transitions.asp*/

		$(".platos").mouseover(function(event){
			var id = "#"+event.target.id;
			$(id).css({'transition': '2s'});
			$(id).css({ 'transform':'scale(1.2)' });
		});

		$(".platos").mouseout(function(event){
			var id = "#"+event.target.id;
			$(id).css({ 'width':'100%' });
			$(id).css({ 'transform':'scale(1)' });
		});

	/*Volem un efecte, sobre les imatges anteriors que:
		cada cop que fem un click sobre alguna imatge, aquesta ha de perdre 10% d’opacitat.
		El mínim d’opacitat que podrà tenir és 0%
		Quan fem click sobre una altra imatge, la imatge sobre la que estavem fent click a de recuperar el 100% d’opacitat.*/
		var opc = 1;
		var ida;
		var cont = 0;
		$(".platos").click(function(event){
			var id = "#"+event.target.id;
			if (opc >= 0) {
				opc = opc-0.1;
				if (ida == id || cont == 0) {
					$(id).css("opacity", opc);
					ida = id;
					cont++;
				}else{
					opc = 1;
					cont = 0;
					$(".platos").css("opacity", opc);
				}	
			}
		  });

	/*Volem fer un slider amb les imatges dels plats.
		En la plantilla original hi ha dos files de plats. A la definitiva volem que només sigui visible una fila de 4 plats al mateix temps. L’altra s’ha de mantenir oculta.
		Modifica l’html i el css com et convingui per aconseguir-ho.

		Un cop fet això:
		Al fer click a sobre d’algun dels elements del menu de paginació (“Pagination”), la fila de 4 plats visibles ha de fer un efecte de desplaçament cap a l’esquerra o la dreta fins a desaparèixer.
		La fila oculta haurà d’aparèixer pel costat oposat al mateix temps que desapareix l’altra, fins a quedar al mateix punt a on estava la primera.
		Al tornar a fer click a algun dels elements del menú de paginació, ha d’aparèixer l’altra fila, fent un efecte d’slider infinit.*/
		var foodcam = false;
		$("#cambiar").click(function(){
			console.log(foodcam);
			if (!foodcam) {
				$("#food").animate({left: '-1200px',});
				$("#ocultar").animate({left: '200px',});
				foodcam = true;
			}else{
				$("#ocultar").animate({left: '2000px',});
				$("#food").animate({left: '200px',});
				foodcam = false;
			}
		});

	/*A on apareix la imatges “About Me, The Food Man”, fes un slideshow amb jQuery que compleixi les següents condicions.
		No es poden fer servir plugins.
		Ha de contenir un mínim de 4 imatges.
		Les imatges han de pasar, amb un efecte de desplaçament, cada cop que l’usuari faci click a sobre d’un botó.*/

		$("#next").click(function(){
			console.log("entro");
			cambiarSlide(1);
		});

		$("#prev").click(function(){
			cambiarSlide(-1);
		});

		var numan;
		var num2 = 1;


		function cambiarSlide(num){
			num2 += num;
			numan = num2-1;
			var idnuman = "#"+numan;
			var id = "#"+num2;
			var foto = $("#1");
			if (num2>4) {
				num2 = 1;
				$(idnuman).css("display", "none");
				$(id).css("display","none");
				foto.css("display", "block");
			}else if(num2<1){
				num2 = 4;
				id = "#"+num2;
				$(idnuman).css("display", "none");
				$(id).css("display","block");
				foto.css("display", "none");
			}else if (num < 0) {
				id = "#"+num2;
				numan = num2+1;
				idnuman = "#"+numan;
				foto.css("display", "none");
				$(idnuman).css("display", "none");
				$(id).css("display", "block");
			}else{
				id = "#"+num2;
				$(idnuman).css("display", "none");
				$(id).css("display", "block");
			}
		}

	/*A continuació fes un altre slideshow, aquest cop fent servir algun plugin a la teva elecció. Ha de complir les següents condicions:
		Ha de contenir un mínim de 10 imatges.
		Les imatges passaran automàticament cada 4 segons.
		L’usuari ha de poder aturar i activar el desplaçament automàtic al situar el ratolí a sobre del slideshow.
		Les imatges passaran si l’usuari fa click en una fletxa endavant o endarrere.
		Les imatges del slideshow s’han de mostrar en forma de miniatura i si l’usuari fa click a sobre d’alguna, aquesta s’ha de visualitzar al slideshow.*/

});
	