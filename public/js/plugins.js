/* Sidebar Menu*/
$(document).ready(function() {
  $('.nav > li > a').click(function() {
    if ($(this).attr('class') != 'active') {
      $('.nav li ul').slideUp();
      $(this).next().slideToggle();
      $('.nav li a').removeClass('active');
      $(this).addClass('active');
    } else {
      $('.nav li ul').slideUp();
      $(this).removeClass('active');
    }
  });
});

function loadContent(href) {
  $.get(href, function(data) {
    $(".content").html(data);
  })
}
$(document).ready(function() {
  // 首页
  //loadContent('hot.html');
  $(document).on("click", '.sidebar-panel a', function() {

    var new_href = $(this).attr('href');
    if (new_href == '#') {
      return false;
    } else {
      loadContent(new_href);
    }

    return false;
  });

});

$(document).ready(function() {
  var win_height = window.innerHeight;
  var top_height = $("#top").height();
  var hv = (win_height) + 'px';
 // console.log(win_height, top_height, hv)
  $('.content').css('height', hv)

  $(window).resize(function() {
    var win_height = window.innerHeight;
    var top_height = $("#top").height();
    var hv = (win_height) + 'px';
    console.log(win_height, top_height, hv)
    $('.content').css('height', hv)


  });

})

/* Top Stats Show Hide */
$(document).ready(function() {
  $("#topstats").click(function() {
    $(".topstats").slideToggle(100);
  });
});


/* Sidepanel Show-Hide */
$(document).ready(function() {
  $(".sidepanel-open-button").click(function() {
    $(".sidepanel").toggle(100);
  });
});



/* Sidebar Show-Hide On Mobile */
$(document).ready(function() {
  $(".sidebar-open-button-mobile").click(function() {
    $(".sidebar").toggle(150);
  });
});


/* Sidebar Show-Hide */
$(document).ready(function() {

  $('.sidebar-open-button').on('click', function() {
    if ($('.sidebar').hasClass('hidden')) {
      $('.sidebar').removeClass('hidden');
      $('.content').css({
        'marginLeft': 250
      });
    } else {
      $('.sidebar').addClass('hidden');
      $('.content').css({
        'marginLeft': 0
      });
    }
  });

});


/* ===========================================================
PANEL TOOLS
===========================================================*/
/* Minimize */
$(document).ready(function() {
  $(".panel-tools .minimise-tool").click(function(event) {
    $(this).parents(".panel").find(".panel-body").slideToggle(100);

    return false;
  });

});

/* Close */
$(document).ready(function() {
  $(".panel-tools .closed-tool").click(function(event) {
    $(this).parents(".panel").fadeToggle(400);

    return false;
  });

});

/* Search */
$(document).ready(function() {
  $(".panel-tools .search-tool").click(function(event) {
    $(this).parents(".panel").find(".panel-search").toggle(100);

    return false;
  });

});



/* expand */
$(document).ready(function() {

  $('.panel-tools .expand-tool').on('click', function() {
    if ($(this).parents(".panel").hasClass('panel-fullsize')) {
      $(this).parents(".panel").removeClass('panel-fullsize');
    } else {
      $(this).parents(".panel").addClass('panel-fullsize');

    }
  });

});


/* ===========================================================
Widget Tools
===========================================================*/


/* Close */
$(document).ready(function() {
  $(".widget-tools .closed-tool").click(function(event) {
    $(this).parents(".widget").fadeToggle(400);

    return false;
  });

});


/* expand */
$(document).ready(function() {

  $('.widget-tools .expand-tool').on('click', function() {
    if ($(this).parents(".widget").hasClass('widget-fullsize')) {
      $(this).parents(".widget").removeClass('widget-fullsize');
    } else {
      $(this).parents(".widget").addClass('widget-fullsize');

    }
  });

});

/* Kode Alerts */
/* Default */
$(document).ready(function() {
  $(".kode-alert .closed").click(function(event) {
    $(this).parents(".kode-alert").fadeToggle(350);

    return false;
  });

});


/* Click to close */
$(document).ready(function() {
  $(".kode-alert-click").click(function(event) {
    $(this).fadeToggle(350);

    return false;
  });

});



/* Tooltips */
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Popover */
$(function() {
  $('[data-toggle="popover"]').popover()
})


/* Page Loading */
$(window).load(function() {
  $(".loading").fadeOut(750);
})