$(document).ready(function(){
	$(document).on("mousemove", function(event){
		var x = event.clientX;
    	var y = event.clientY;

		var y1 = $("#mov").css("top", y + 'px');
		var x1 = $("#mov").css("left", x + 'px');
  });
});