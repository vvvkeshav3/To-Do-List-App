
$("i").first().on("click",function(){
	$("input").fadeToggle(500);
});

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("input").on("keypress",function(event){
	if(event.which === 13){
		var newContent=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + newContent +"</li>");
	}
});

$("ul").on("click","span",function(){
	$(this).parent().slideUp(500,function(){
		$(this).remove();
	})
	$(this).stopPropagation();
});
