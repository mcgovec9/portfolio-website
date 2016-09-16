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





