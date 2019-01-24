$(function() {
    var header = $(".work-head");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 600) {
            header.removeClass('lighthead').addClass("darkHeader");
            $(".scrolltop").css("display","block");
        } else {
            header.removeClass("darkHeader").addClass('lighthead');
            $(".scrolltop").css("display","none");
        }
        
        
    });
});

$('.n-menu a').click(function() {
    
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 140
            }, 500);
            return false;
        }
    
});