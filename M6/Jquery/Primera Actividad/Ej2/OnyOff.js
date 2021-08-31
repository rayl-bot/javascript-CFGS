$(document).ready(function(){
//El On funciona como aun AddEventListener en javascript puro
$("p").on("click", function(){
	var array = ["#5F25B6","#D7D719","#1FFF00"];
	var random = Math.floor(Math.random()*(3-0));
	console.log(random);
    $(this).css("background-color", array[random]);
  });
//La funcion Off sería la forma de quitarle un evento a un elemento.
  $("button").click(function(){
    $("p").off("click");
  });
});