/******************************************
    File Name: custom.js
    Template Name: Landigoo
    Created By: MelodyThemes
    Envato Profile: http://themeforest.net/user/melodythemes
    Website: https://melodythemes.com
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";
	
		/* ==============================================
			SMOOTH SCROLL 
		=============================================== */
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
				|| location.hostname == this.hostname) {
		
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				   if (target.length) {
					 $('html,body').animate({
						 scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
		  // Activate scrollspy to add active class to navbar items on scroll
		  $('body').scrollspy({
			target: '#mainNav',
			offset: 54
		  });
		/* =========================
            SCROLL MENU
        =========================*/
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header-block-top').addClass('fixed-menu');
			} else {
				$('.header-block-top').removeClass('fixed-menu');
			}
		});
		
		/* =========================
            NAV MENU
        =========================*/
		$('.navbar-nav li a').on("click", function(e) {
			$('.navbar-nav li').removeClass('active');
			var $parent = $(this).parent();
			if (!$parent.hasClass('active')) {
				$parent.addClass('active');
			}
		});
		
		
		/* ========================
			WOW ANIMATION
		=============================*/
		
    		new WOW().init();
			
		/* ==============================================
			PRELOADER
		=============================================== */
		
		  
		$(window).load(function() { 
			$("#status").fadeOut("slow"); 
			$("#loader").delay(200).fadeOut(); 
		})
		
		  
		  
		/* ==============================================
			SCROLL UP
		=============================================== */
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
		
		/* ==============================================
			PARALLAX
		=============================================== */	
		
		$.fn.parallax = function(options) {
 
			var windowHeight = $(window).height();
	 
			// Establish default settings
			var settings = $.extend({
				speed        : 0.15
			}, options);
	 
			// Iterate over each object in collection
			return this.each( function() {
	 
				// Save a reference to the element
				var $this = $(this);
	 
				// Set up Scroll Handler
				$(document).scroll(function(){
	 
						var scrollTop = $(window).scrollTop();
							var offset = $this.offset().top;
							var height = $this.outerHeight();
	 
				// Check if above or below viewport
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
	 
				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
	 
					 // Apply the Y Background Position to Set the Parallax Effect
					$this.css('background-position', 'center ' + yBgPosition + 'px');
					
				});
			});
		}
	
		$('.parallax').parallax({
			speed : 0.15
		});
	
})(jQuery);