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

$(document).ready(function() {
	$(document).on('click','.container_select',function(){
		$(this).parent().children().removeClass('container_select_active');
		$(this).addClass('container_select_active');
		

	});
	$(document).on('mouseover','.container_select',function(){
		
	})
	$(document).on('mouseout','.container_select',function(){
		
		
	})

})