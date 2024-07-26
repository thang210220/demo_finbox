//owl-carousel-prize
$(document).ready(function() {
    $('.owl-prize').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    var owl = $('.owl-prize');
    owl.owlCarousel();
    //go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    //go to the previous item
    $('.customPrevBtn').click(function() {
        //with optional speed parameter
        //Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});


//owl-carousel-media
$(document).ready(function() {
    $('.owl-media').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        // navText:[
        //     "<i class='fa fa-angle-left'></i>",
        //     "<i class='fa fa-angle-right'></i>"
        // ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    var owl = $('.owl-media');
    owl.owlCarousel();
    //go to the next item
    $('.customNextBtn-2').click(function() {
        owl.trigger('next.owl.carousel');
    });
    //go to the previous item
    $('.customPrevBtn-2').click(function() {
        //with optional speed parameter
        //Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});
