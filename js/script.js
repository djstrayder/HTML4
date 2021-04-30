$(document).ready(function (){
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('look');
    })
    $('.slider_reveiw').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000
    });
    $('.slider_mentors').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000
    });
});

// slider
