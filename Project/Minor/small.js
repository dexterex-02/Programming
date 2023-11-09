$(document).ready(function () {
    var owl = $('#designs-list');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        smartSpeed: 3000,
        autoplayTimeout: 8500,
        autoplayHoverPause: true,
        nav: false,
        // dots:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });
});

$(document).ready(function () {
    var owl = $('#clients-list');
    owl.owlCarousel({
        margin: 80,
        nav: true,
        loop: true,
        autoplay: true,
        smartSpeed: 3000,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1024: {
                items: 4,
            },
        },
    });
});
