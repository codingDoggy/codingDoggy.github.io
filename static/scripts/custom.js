(function ($) {

    "use strict";

        // PRE loader
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        //Navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });

        // Smooth scroll
        $(function() {
          $('.custom-navbar a, #home a').bind('click', function(event) {
            var elem = $($(this).attr('href'));
            if(!elem instanceof Object)
              return;
            $('html, body').stop().animate({
              scrollTop: elem.offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });

        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);
