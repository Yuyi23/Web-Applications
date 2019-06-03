//click events
$("ul").on ("click","li", function(){
	$(this).toggleClass("completed");
});

//click x to delete event
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text'").keypress(function(){
	if(event.which == 13){
		//get new todo
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text'").fadeToggle();
});