$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 300) {
            header.removeClass('lighthead').addClass("darkHeader");
            $(".scrolltop").css("display","block");
        } else {
            header.removeClass("darkHeader").addClass('lighthead');
            $(".scrolltop").css("display","none");
        }
        
        
    });

    
});

$('.nav-item a').click(function() {
    
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 140
            }, 500);
            return false;
        }
    
});



$(window).resize(function() {
    $selector = $('#facultyy .larged, #orgcom .larged');

    if ($(window).width() < 1025) {
        $selector.removeClass('col');
        $selector.addClass('col-md-6');
        $selector.css('margin-bottom','15px');

    } else {
        $selector.removeClass('col-md-6');
        $selector.addClass('col');
        $selector.css('margin','0px');
    }
}).resize();


$(document).ready(function() {
    var workshop = $(".workshop-carousel");
    workshop.owlCarousel({
      items: 3,
      loop: true,
      autoPlay: true,
      autoPlayTimeout: 1000,
      responsiveClass:true,
        responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
            
        }
    }

    });
    
  });

	

