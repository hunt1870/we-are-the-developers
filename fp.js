$(document).ready(function(){
$("#fade").fadeOut();
$(".fa").click(function(){
	$("nav").fadeToggle(500);
	$("#fade").fadeToggle(500);
});
var todo;
$("input[type='text']").keypress(function(event){
    if(event.which===13){
    	 todo=$(this).val();
    	 $(this).val(" ");
    	 $("nav").fadeToggle(1000);
    	 $("#fade").fadeToggle(1000);
    	 $(".fa").attr("placeholder","Search here");
         return todo;
    	}
    }
    );
$("li a").mouseenter(function(){
    $(this).animate({
    fontSize: '+=2.5px'
    });
});
$("li a").mouseleave(function(){
    $(this).animate({
    fontSize: '-=2.5px'
    });
});
$(".btn").mouseenter(function(){
    $(this).animate({
        padding: '+=3px'
    });
});
$(".btn").mouseleave(function(){
    $(this).animate({
        padding: '-=3px'
    });
});
});