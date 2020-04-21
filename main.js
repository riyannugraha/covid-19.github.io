const nextIcons = document.querySelector('#nextIcon');
const prevIcons = document.querySelector('#prevIcon');

$(document).ready(function(){
    var one = $('#one');
    var two = $('#two');
    var three = $('#three');

    one.owlCarousel({
        loop:true,
        autoWidth: false,
        margin: 200,
        nav:true,
        autoplay: true,  
        autoplayTimeout: 3000,
        autoplaySpeed: 1300,
        // autoplayTimeout: 1520,   
        autoplayHoverPause: true, 
        responsive:{
            0:{
                items:1,
                margin: 10
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    two.owlCarousel({
        loop:true,
        autoWidth: false,
        margin: 120,
        nav:true,
        touchDrag: false,
         autoplay: true,  
        autoplayTimeout: 5000,
        autoplaySpeed: 1300,
        // autoplayTimeout: 1520,   
        autoplayHoverPause: true, 
        responsive:{
            0:{
                items:1,
                margin: 10
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    three.owlCarousel({
        loop:true,
        margin:140,
        nav:true,
        stagePadding: 12,
        navText: [    
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

});

