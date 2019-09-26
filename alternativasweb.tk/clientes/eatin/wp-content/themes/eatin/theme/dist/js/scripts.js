/*
 * b4st JS
 */

(function ($) {
	'use strict';

	$(document).ready(function() {
		// Comments
		$('.commentlist li').addClass('card mb-3');
		$('.comment-reply-link').addClass('btn btn-secondary');

		// Forms
		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');

		// Pagination fix for ellipsis
		$('.pagination .dots').addClass('page-link').parent().addClass('disabled');

		// You can put your own code in here

        /**
         * Carrusel
         */
        $('#carouselExampleFade').carousel({
            interval: false
        });

        /**
         * Slick Carousel
         */
        if ($(".variable-width")[0]){
            $(".prev").click(function(){
                $(".slider").slick("slickPrev");
            });

            $(".next").click(function(){
                $(".slider").slick("slickNext");
            });

            $(".variable-width").slick({
                centerMode: true,
                slidesToShow: 1,
                variableWidth: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }

        /**
		 * Menú con scroll
         */
        function onScroll(event) {
            var scrollPos = $(document).scrollTop();

            $('.menuSuperior .scroll a.nav-link').each(function () {
                var currLink = $(this);
                var addressValue = $(this).attr("href");
                var val = addressValue;
                var myString = val.substr(val.indexOf("#") + 1);
                var enlace = "#" + myString;
                var refElement = $(enlace);

                console.log(refElement);
                debugger;

                if ((refElement.position().top - 83) <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('#menu-menu-principal a.nav-link').removeClass("activo");
                    currLink.addClass("activo");
                } else {
                    currLink.removeClass("activo");
                }
            });
        };

        if ($(".home")[0]) {
            $(document).on("scroll", onScroll);

            $('.scroll a[href*=\\#]').bind('click', function(e) {
                e.preventDefault(); // prevent hard jump, the default behavior

                var addressValue    = $(this).attr("href"),
                    val             = addressValue,
                    myString        = val.substr(val.indexOf("#") + 1),
                    enlace          = "#" + myString;

                var target         = $(enlace);

                // perform animated scrolling by getting top-position of target-element and set it as scroll target
                $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
                }, 600, function() {
                    location.hash = enlace; //attach the hash (#jumptarget) to the pageurl
                });

                return false;
            });
        }

        if ($(".scroll")[0]) {
            $('a.scroll[href*=\\#]').bind('click', function(e) {
                e.preventDefault();

                var addressValue    = $(this).attr("href");

                $('html, body').stop().animate({
                    scrollTop: $(addressValue).offset().top
                }, 600, function() {
                    location.hash = enlace; //attach the hash (#jumptarget) to the pageurl
                });

                return false;
            });
        }

        var boxes = document.querySelectorAll('.box');

        for (var i = 0; i < boxes.length; i++) {
            //boxes[i].style.height = boxes[i].offsetWidth + 'px';
            boxes[i].addEventListener("mouseenter", function(e) {
                TweenMax.to(e.target.querySelector('img'), .5, {
                    scale: "1.15"
                });
                /*TweenMax.to(e.target.querySelector('.text-overlay'), .75, {
                    opacity: "1"
                });*/
                TweenMax.to(e.target.querySelector('h3'), .5, {
                    yPercent:-50
                });
                TweenMax.to(e.target.querySelector('p'), .5, {
                    yPercent:-50,
                    opacity: "1"
                });
            });
            boxes[i].addEventListener("mouseleave", function(e) {
                TweenMax.to(e.target.querySelector('img'), 0.5, {
                    scale: "1"
                });
                /*TweenMax.to(e.target.querySelector('.text-overlay'), .75, {
                    opacity: "0"
                });*/
                TweenMax.to(e.target.querySelector('h3'), .5, {
                    yPercent:0
                });
                TweenMax.to(e.target.querySelector('p'), .5, {
                    yPercent: 0,
                    opacity: "0"
                });
            });
        }
	});
}(jQuery));
