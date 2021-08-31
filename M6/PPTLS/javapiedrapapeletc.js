window.onload = function() {
  //Declaramos la array.
  var array = ["PIEDRA", "PAPEL", "TIJERAS","LAGARTO", "SPOCK"];
  //Declaramos la función para que cuando cliquemos al botón de tradicional, se inicie.
  console.log(array);
  document.querySelector("#trad").onclick=function(){
    var tirada = document.querySelector("#tirada").value;
    console.log("Valor introducido: "+tirada);
    var tirada1 = tirada.toUpperCase();
    console.log("Valor introducido pasado a mayusculas: "+tirada1);
    //Pasamos el valor de tirada a mayusculas para que no hayan problemas cuando se compueben en la array.
    //a es un valor que representa el límite de las posicones que va a comprobar en la array.
    var a = 2;
    //Llamamos am la función para que inicie la comprobación.
    var resultado = comprobaropc(tirada1,a);
    console.log("Resultado que devuelve la función comprobaropc: "+resultado);
    if (resultado == true) {
      var maquina = aleatorio(0,3);
      console.log("Resultado que devuelve el número aleatorio: "+maquina);
      //Si te devuelve true, inicia la función del if.
      ifs(tirada1, maquina);
      //En caso de ser true pero que sea lagarto o spock, dará nu mensaje conforme no has introducido un nobre valido.
  }else if(tirada1 == "LAGARTO" || tirada1 == "SPOCK"){
    document.getElementById("resp").innerHTML = "La opción que has seleccionado no concuerda con la versión.";
  }else {
    //Devuelve que la opción no es válida.
    document.getElementById("resp").innerHTML = "No has seleccionado una opción válida.";
  }
}
  //Función para que al darle al botón de bbt, inicie la función de comprobación.
  document.querySelector("#bbt").onclick=function() {
    var tirada = document.querySelector("#tirada").value;
    //Pasamos el valor de tirada a mayusculas para que no hayan problemas cuando se compueben en la array.
    var tirada1 = tirada.toUpperCase();
    //a es un valor que representa el límite de las posicones que va a comprobar en la array.
    var a = 4;
    //Llamamos a la función que comprobará si el valor está dentro de la array.
    var resultado = comprobaropc(tirada1,a);
    if (resultado == true) {
      //Función que buscará un número aleatorio entre el 0 y el 5 que represente la posición del valor de la array.
      var maquina = aleatorio(0,5);
      //Se llama a la función para que se ponga a comprobar el valor que hemos introducido con el valor aleatorio.
      ifs(tirada1, maquina);
  }else{
    //En caso de que no lo encuentre en la array, saltará el siguiente mensaje.
    document.getElementById("resp").innerHTML = "No has seleccionado una opción válida.";
  }
  }
  function ifs (tirada1, maquina){
    //En este if compruba si la tirada es igual a PIEDRA, entrará en caso de ser cierto, sino parará al siguiente.
    console.log("Contenido de la posicion de maquina en la array: "+array[maquina]);
    console.log("Valor que tiene tirada1: "+tirada1);
    if (tirada1 == "PIEDRA") {
      console.log("Entramos en el if de comparacion.");
        if (array[maquina]=="PIEDRA") {
          document.getElementById("resp").innerHTML = "EMPATE";//Si es igual mostrará empate.
          console.log("Se introduce la imagen del empate.");
          empate();//Función que llama a la imagen que saldrá en caso de que sea empate.
        }else if (array[maquina]=="TIJERAS") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="PAPEL") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierde.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que sea empate.
        }else if (array[maquina]=="LAGARTO") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="SPOCK") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }
    //En este if compruba si la tirada es igual a PAPEL, entrará en caso de ser cierto, sino parará al siguiente.
    }else if (tirada1 == "PAPEL") {
      console.log("Entramos en el if de comparacion.");
        if (array[maquina]=="PAPEL") {
          document.getElementById("resp").innerHTML = "EMPATE";//Si es igual mostrará empate.
          console.log("Se introduce la imagen del empate.");
          empate();//Función que llama a la imagen que saldrá en caso de que sea empate.
        }else if (array[maquina]=="TIJERAS") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if(array[maquina]=="PIEDRA"){
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="LAGARTO") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if (array[maquina]=="SPOCK") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }
    //En este if compruba si la tirada es igual a TIJERAS, entrará en caso de ser cierto, sino parará al siguiente.
    }else if (tirada1 == "TIJERAS") {
      console.log("Entramos en el if de comparacion.");
        if (array[maquina]=="TIJERAS") {
          document.getElementById("resp").innerHTML = "EMPATE";//Si es igual mostrará empate.
          console.log("Se introduce la imagen del empate.");
          empate();//Función que llama a la imagen que saldrá en caso de que sea empate.
        }else if (array[maquina]=="PIEDRA") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if (array[maquina]=="LAGARTO") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="PAPEL") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="SPOCK") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }
    //En este if compruba si la tirada es igual a LAGARTO, entrará en caso de ser cierto, sino parará al siguiente.
    }else if (tirada1 == "LAGARTO") {
      console.log("Entramos en el if de comparacion.");
        if (array[maquina]=="TIJERAS") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if (array[maquina]=="PIEDRA") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if (array[maquina]=="LAGARTO") {
          document.getElementById("resp").innerHTML = "EMPATE";//Si es igual mostrará empate.
          console.log("Se introduce la imagen del empate.");
          empate();//Función que llama a la imagen que saldrá en caso de que sea empate.
        }else if (array[maquina]=="PAPEL") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="SPOCK") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }
    //En este if compruba si la tirada es igual a SPOCK, entrará en caso de ser cierto, sino parará al siguiente.
    }else if (tirada1 == "SPOCK") {
      console.log("Entramos en el if de comparacion.");
        if (array[maquina]=="TIJERAS") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="PIEDRA") {
          document.getElementById("resp").innerHTML = "GANAS";//Si gana mostrará ganas.
          console.log("Se introduce la imagen de ganador.");
          ganador();//Función que llama a la imagen que saldrá en caso de que ganes.
        }else if (array[maquina]=="LAGARTO") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if (array[maquina]=="PAPEL") {
          document.getElementById("resp").innerHTML = "PIERDES";//Si pierde mostrará pierdes.
          console.log("Se introduce la imagen de perdedor.");
          perdedor();//Función que llama a la imagen que saldrá en caso de que pierdas.
        }else if (array[maquina]=="SPOCK") {
          document.getElementById("resp").innerHTML = "EMPATE";//Si es igual mostrará empate.
          console.log("Se introduce la imagen del empate.");
          empate();//Función que llama a la imagen que saldrá en caso de que sea empate.
        }
    }
    }
//Función para comprobar el nombre introducido en la array.
function comprobaropc(tirada1,a) {
  console.log("Funcion de comprobación: Valor de tirada1: "+tirada1 +" Numero de posiciones: "+a);
  for (var i =  0; i <= a; i++) {
    if (tirada1 == array[i]) {
      return true;//Acabará la sentencia y devolverá true.
    }
  }
  return false;//Devolverá false al terminar el for.
}
//Función que dará un número entero aleatorio entre los dos valores que le introduzcamos al llamarla.
function aleatorio(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
//Esta función hará que al darle al botón con id reload, se recargue la paguina.
document.querySelector("#reload").onclick=function() {
  location.reload(true);
  }
//Función para que sustituya la imagen anterior por la imagen ganador.jpg
  function ganador() {
    document.querySelector("#imagen").src = "ganador.jpg";
    console.log("Se ha introducido la imagen ganador.");
  }
//Función para que sustituya la imagen anterior por la imagen perdedor.jpg
  function perdedor() {
    document.querySelector("#imagen").src = "perdedor.jpg";
    console.log("Se ha introducido la imagen perdedor.");
  }
//Función para que sustituya la imagen anterior por la imagen empatador.jpg
  function empate() {
    document.querySelector("#imagen").src = "empatador.jpg";
    console.log("Se ha introducido la imagen empatador.");
  }
}