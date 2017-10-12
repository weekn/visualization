$(document).ready(function() {
	
	$(document).on('click','.content_botton',function(){
		$(this).parent().children().removeClass('content_botton_active');
		$(this).addClass('content_botton_active');
		

	});
	$(document).on('mouseover','.content_botton',function(){
		
	})
	$(document).on('mouseout','.content_botton',function(){
		
		
	})
	//.............//
	$(document).on('mouseover','.content_illustrate',function(){
		$(this).addClass('content_illustrate_active');
	})
	$(document).on('mouseout','.content_illustrate',function(){
		$(this).removeClass('content_illustrate_active');
		
	})



})

