(function($) {
    'use strict';

    $('.headroom').headroom({
        offset : 0,
        tolerance : 0,
    });

    function isVisible (el) {
        let top = $(el).offset().top + 100;
        return top < ($(window).scrollTop() + $(window).height());
    }

    $("myCarousel").carousel();

    


})(jQuery);