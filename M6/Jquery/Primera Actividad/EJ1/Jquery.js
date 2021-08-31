		$(document).ready(function(){
			var contsr = 0;
			var contdbr = 0;

			var contsa = 0;
			var contdba = 0;

			var contsn = 0;
			var contdbn = 0;

			var contsna = 0;
			var contdbna = 0;

			$("#rojo").click(function(){
				contsr++;
				$("#crojo").html("Contador de clicks simples: "+contsr);
				mayor();
			});

			$("#rojo").dblclick(function(){
				contdbr++;
				$("#dbrojo").html("Contador de doble clicks: "+contdbr);
				mayor();
			});

			$("#azul").click(function(){
				contsa++;
				$("#cazul").html("Contador de clicks simples: "+contsa);
				mayor();
			});

			$("#azul").dblclick(function(){
				contdba++;
				$("#dbazul").html("Contador de doble clicks: "+contdba);
				mayor();
			});

			$("#negro").click(function(){
				contsn++;
				$("#cnegro").html("Contador de clicks simples: "+contsn);
				mayor();
			});

			$("#negro").dblclick(function(){
				contdbn++;
				$("#dbnegro").html("Contador de doble clicks: "+contdbn);
				mayor();
			});

			$("#naranja").click(function(){
				contsna++;
				$("#cnaranja").html("Contador de clicks simples: "+contsna);
				mayor();
			});

			$("#naranja").dblclick(function(){
				contdbna++;
				$("#dbnaranja").html("Contador de doble clicks: "+contdbna);
				mayor();
			});

			function mayor(){
				var rojo = contsr +contdbr;
				var azul = contsa +contdba;
				var negro = contsn + contdbn;
				var naranja = contsna + contdbna;

				if (rojo > azul) {
					if (rojo > negro) {
						if (rojo > naranja) {
							//gana rojo
							$("#rojo").css("background-color","green");
							$("#azul").css("background-color","blue");
							$("#naranja").css("background-color","orange");
							$("#negro").css("background-color","black");
						}else {
							//gana naranja
							$("#rojo").css("background-color","red");
							$("#azul").css("background-color","blue");
							$("#naranja").css("background-color","green");
							$("#negro").css("background-color","black");
						}
					}else if(negro> naranja){
						//gana negro
						$("#rojo").css("background-color","red");
						$("#azul").css("background-color","blue");
						$("#naranja").css("background-color","orange");
						$("#negro").css("background-color","green");
					}else {
						//gana naranja
						$("#rojo").css("background-color","red");
						$("#azul").css("background-color","blue");
						$("#naranja").css("background-color","green");
						$("#negro").css("background-color","black");
					}
				}else if(azul>negro){
					if (azul>naranja) {
						//gana azul
						$("#rojo").css("background-color","red");
						$("#azul").css("background-color","green");
						$("#naranja").css("background-color","orange");
						$("#negro").css("background-color","black");
					}else{
						//gana naranja
						$("#rojo").css("background-color","red");
						$("#azul").css("background-color","blue");
						$("#naranja").css("background-color","green");
						$("#negro").css("background-color","black");
					}
				}else if(negro>naranja){
					//gana negro
						$("#rojo").css("background-color","red");
						$("#azul").css("background-color","blue");
						$("#naranja").css("background-color","orange");
						$("#negro").css("background-color","green");
				}else{
					$("#rojo").css("background-color","red");
					$("#azul").css("background-color","blue");
					$("#naranja").css("background-color","orange");
					$("#negro").css("background-color","black");
				}
			}

		});