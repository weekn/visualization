function loadContent(href) {
  $.get(href, function(data) {
    $("#project").html(data);
  })
};
$(document).ready(function(){
	loadContent("pro_traveler/main.html");


});

//ertry//
/*$(document).ready(function() {
	$(document).on('click','.entry',function(){
		$('.entry').css({
			"border-bottom": "none",
		});
		$(this).css({
			"border-bottom": "2px solid rgb(34,93,153)",
		});
		

	});
	$(document).on('mouseover','.entry',function(){
		$(this).css({
			'color':'rgb(34,93,153)',
			'cursor':'pointer', 
		})
	})
	$(document).on('mouseout','.entry',function(){
		
		$(this).css({
			'color':'rgb(105,105,105)',
		})
	})


});*/



$(document).ready(function() {
  var win_height = window.innerHeight;
  var top_height = $("#top").height();
  var main_content = $("#main_content").height();
  var hv = (win_height-top_height) + 'px';

  console.log(win_height, top_height, hv);
  $('.main_content').css('height', hv)

  $(window).resize(function() {
    var win_height = window.innerHeight;
    var top_height = $("#top").height();
    var hv = (win_height-top_height) + 'px';
    $('#main_content').css('height', hv)


  });

})


