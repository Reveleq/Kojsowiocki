$(document).ready(function () {
    $('.news__cards').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
          breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }},
            {breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
          
        }],

    });
})	