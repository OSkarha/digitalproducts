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

    $('.team__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: `<a href="" class="arrow arrow--left">
                       <svg width="22" height="38" >
                          <use xlink:href="#svg-left"/>
                       </svg>
                    </a>`,
  
          nextArrow: `<a href="" class="arrow arrow--right">
                       <svg width="22" height="38" >
                          <use xlink:href="#svg-right"/>
                       </svg>
                    </a>`,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1  
                }
            }]
            
      });
})(jQuery);