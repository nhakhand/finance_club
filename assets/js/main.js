(function ($) {
    "use strict";

    jQuery(document).ready(function($){

        var searchBox = $('.search-trigger-table');


        $('.search-to').on('click',function(){
            searchBox.addClass('active');     

        });

        $('.close-trigger').on('click',function(){
            searchBox.removeClass('active');

        });

        if($.fn.slicknav) {
            $('.slick-mobile').slicknav();
        };

        if($.fn.magnificPopup) {
            $('.video-play-btn').magnificPopup();
        };


        if($.fn.counterUp) {
            $('.counter-number span').counterUp({
                delay: 10,
                time: 2000
            });
        };


        if($.fn.owlCarousel) {
            $(".hero-slier-wrapper").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: '7000',
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                dots: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',

            });
        };


        $('.hero-slier-wrapper').on('translate.owl.carousel',function(){
            $('.single-slider-wrapper h2').removeClass('slideInRight animated').css("opacity","0");
            $('.single-slider-wrapper h3').removeClass('slideInLeft animated').css("opacity","0");
            $('.single-slider-wrapper .contact-btn .contact1').removeClass('bounceInUp animated').css("opacity","0");
            $('.single-slider-wrapper .contact-btn .contact2').removeClass('bounceInUp animated').css("opacity","0");
        });


        $('.hero-slier-wrapper').on('translated.owl.carousel',function(){
            $('.owl-item.active .single-slider-wrapper h2').addClass('slideInRight animated').css("opacity","1");
            $('.owl-item.active .single-slider-wrapper h3').addClass('slideInLeft animated').css("opacity","1");
            $('.owl-item.active .single-slider-wrapper .contact-btn .contact1').addClass('bounceInUp animated').css("opacity","1");
            $('.owl-item.active .single-slider-wrapper .contact-btn .contact2').addClass('bounceInUp animated').css("opacity","1");
        });

        if($.fn.progressBar) {
            $('.progressbar1').progressBar({
                percentage : true,
                animation : true,
                backgroundColor : "#F4F4F4",
                barColor: '#1A8BB3',
                targetBarColor : '#F4F4F4',
                height : "12",
                shadow : false

            });
        };


        if($.fn.owlCarousel) {
            $(".single-team-member-wrapper").owlCarousel({
                loop: true,
                autoplay: false,
                margin: 30,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                autoplayTimeout: 4000,
                autoplaySpeed: 1000,
                responsive : {
                    0 : {
                        items: 2,
                    },
                    768 : {
                        items: 3,
                    },

                    992 : {
                        items: 4,
                    }
                }
            });
        };


        if($.fn.owlCarousel) {  $(".client-carousel-wrapper").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000
        });
                             }
        if($.fn.owlCarousel) {
            $(".logo-carousel-wrapper").owlCarousel({

                margin: 30,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 1000,
                responsive : {
                    0 : {
                        items: 2,
                    },
                    768 : {
                        items: 3,
                    },

                    992 : {
                        items: 4,
                    }
                }
            });
        };

        if($.fn.owlCarousel) {
            $(".childClient-comment-wrap").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 1000,
                nav: false,
                dots: true

            });
        };


        //Isotope-filtering

        $(".fiter-list li").on('click',function(){
            $(".fiter-list li").removeClass("active");
            $(this).addClass("active");


            var selector = $(this).attr('data-filter');
            $(".filtering-project").isotope({
                filter: selector
            });
        });


        // GoogleMap
        
        
       
        

        

        //scrollTop

        $(window).scroll(function(){
            var scrollHeight = $(window).scrollTop();
            if(scrollHeight > 250){
                $('.scrollTop-btn').fadeIn(1000);
            }else{
                $('.scrollTop-btn').fadeOut(500);
            }
        });

        $('.scrollTop-btn').on('click',function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });
    
    });
    
    


    jQuery(window).load(function(){

        jQuery('.spinner-wrapper').fadeOut('slow', function() {
            jQuery(this).remove();
        });


    });




}(jQuery));	