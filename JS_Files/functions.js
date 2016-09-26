function stickyNav(){
    $(document).ready(function(){
        var nav = $('.nav');
        var header = $('.header');

        $(window).scroll(function(){
            var windowPos = $(window).scrollTop();
            if(windowPos >= header.outerHeight()){
                nav.addClass('fixedTop');
            }
            else{
                nav.removeClass('fixedTop');
            }
        })
    });
}

$(document).ready(function(){
    $('.slide-section').click(function(e) {

        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        });

        e.preventDefault();
    });
});


$(document).ready( function() {
    var topOfOthDiv = $('.header').offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
            $('.arrow').hide();
        }
        else{
            $('.arrow').show();
        }
    });
});


$(window).scroll(function() {
    var $wp        = $('.whichprep');
    var $sh        = $('.soc_hub');
    var $window      = $(window);
    var wpTop        = $wp.offset().top;
    var shTop        = $sh.offset().top;
    var windowTop    = $window.scrollTop();
    var windowBottom = windowTop + $window.height();

    if (wpTop > windowTop && wpTop < windowBottom) {
        $wp.animate({right: 10 + '%'}, {queue: true, duration: 1700});
    }
    if (shTop > windowTop && shTop < windowBottom) {
        $sh.animate({right: 10 + '%'}, {queue: true, duration: 1700});
    }
});



