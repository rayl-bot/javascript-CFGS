window.onload = function() {

	document.querySelector("#seccion").onclick=function monstrarmenu(){
    if (document.querySelector("#oculto").style.display=='block') {
      document.querySelector("#oculto").style.display='none';
    }else{
      document.querySelector("#oculto").style.display='block';
    }
 }

 document.querySelector("#basico").onclick=function img1(){
    if (document.querySelector("#basico").style.width=='300px' && document.querySelector("#basico").style.height=='300px') {
      document.querySelector("#basico").style.width='200px';
      document.querySelector("#basico").style.height='200px';
    }else{
      document.querySelector("#basico").style.width='300px';
      document.querySelector("#basico").style.height='300px';
    }
 }

  document.querySelector("#gaming").onclick=function img2(){
    if (document.querySelector("#gaming").style.width=='300px' && document.querySelector("#gaming").style.height=='300px') {
      document.querySelector("#gaming").style.width='200px';
      document.querySelector("#gaming").style.height='200px';
    }else{
      document.querySelector("#gaming").style.width='300px';
      document.querySelector("#gaming").style.height='300px';
    }
 }

  document.querySelector("#ultra").onclick=function img3(){
    if (document.querySelector("#ultra").style.width=='300px' && document.querySelector("#ultra").style.height=='300px') {
      document.querySelector("#ultra").style.width='200px';
      document.querySelector("#ultra").style.height='200px';
    }else{
      document.querySelector("#ultra").style.width='300px';
      document.querySelector("#ultra").style.height='300px';
    }
 }

  function producto(marca, modelo, cpu, ram, hdd, gb, px) {
    console.log(gb+" "+px);
    this.marca = marca;
    this.modelo = modelo;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.gb = gb;
    this.px = px;
  }

  document.querySelector("#enviar").onclick=function datos() {
    var inputs = document.querySelectorAll("input");
    var Producto1 = new producto(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value);
    json(Producto1);
  }

  document.querySelector("#tabla").onclick=function tabla(){
    if (localStorage.length >= 2) {
      do {
    var comparar1 = sacarvalor();
    var comparar = sacarvalor();
    }while(comparar.modelo == comparar1.modelo);
    console.log(comparar1);
    console.log(comparar);
      document.querySelector("#mtabla").innerHTML = "<table><tr><td>PORTATIL</td><td>MARCA</td><td>MODELO</td><td>CPU</td><td>RAM</td><td>HDD</td><td>GB</td><td>PX</td></tr><tr><td>Portatil 1</td><td>"+comparar.marca+"</td><td>"+comparar.modelo+"</td><td>"+comparar.cpu+"</td><td>"+comparar.ram+"</td><td>"+comparar.hdd+"</td><td>"+comparar.gb+"</td><td>"+comparar.px+"</td></tr><tr><td>Portatil 2</td><td>"+comparar1.marca+"</td><td>"+comparar1.modelo+"</td><td>"+comparar1.cpu+"</td><td>"+comparar1.ram+"</td><td>"+comparar1.hdd+"</td><td>"+comparar1.gb+"</td><td>"+comparar1.px+"</td></tr></table>"
    }else{
      document.querySelector("#mtabla").innerHTML = "Tiene que haber 2 o más portátiles.";
    }
  }

  function json(producto) {
    var myJSON = JSON.stringify(producto);
    nombreStorage = "portatil" + (localStorage.length+1);
    localStorage.setItem(nombreStorage, myJSON);
    var txt = localStorage.getItem("producto");
    var obj = JSON.parse(txt);
    document.getElementById("mostrar").innerHTML = "Hay "+localStorage.length+" objetos en el localStorage"; 
  }

  function sacarvalor() {
    var numStorage = Math.floor(Math.random()*(0-(localStorage.length+1)+1)+(localStorage.length));
    var nombre = "portatil"+(numStorage+1);
    var txt = localStorage.getItem(nombre);
    var obj = JSON.parse(txt);
    return obj;
  }
}