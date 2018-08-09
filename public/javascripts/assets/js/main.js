jQuery(document).ready(function () {

//Preloader active
    jQuery(window).load(function () {
        jQuery(".loaded").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });

// sidenav navbar nav
    jQuery(".button-collapse").sideNav();

// Counter - compteur
    jQuery('.statistic-counter').counterUp({
        delay: 100,
        time: 2000
    });
	
// Counter - compteur
$('.number-counter').countToD();


// Home slider
    jQuery('.slider').slider({full_width: true});

// client slider
    jQuery('.carousel').carousel();

// accordion

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
    
// nav menu small menu
    jQuery(document).on("scroll", function () {
        if ($(document).scrollTop() > 120) {
            $("nav").addClass("small");
        } else {
            $("nav").removeClass("small");
        }
    });


});
(function($) {
  $.fn.countToD = function(options) {
    return this.each(function() {
      //-- Arrange
      var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
      var $el = $(this);
      var countFrom = parseInt($el.attr('data-count-from'));
      var countTo = parseInt($el.attr('data-count-to'));
      var countSpeed = $el.attr('data-count-speed'); // Number increment per second

      //-- Action
      var rafId;
      var increment;
      var currentCount = countFrom;
      var countAction = function() {              // Self looping local function via requestAnimationFrame
        if(currentCount > countTo) {              // Perform number incremeant
          $el.text(Math.floor(currentCount));     // Update HTML display
          increment = countSpeed / FRAME_RATE;    // Calculate increment step
          currentCount -= increment;              // Increment counter
          rafId = requestAnimationFrame(countAction);
        } else {                                  // Terminate animation once it reaches the target count number
          $el.text(countTo);                      // Set to the final value before everything stops
          //cancelAnimationFrame(rafId);
        }
      };
      rafId = requestAnimationFrame(countAction); // Initiates the looping function
    });
  };
}(jQuery));







