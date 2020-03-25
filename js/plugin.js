/*global $, alert, console*/
$(document).ready(function () {
    
    "use strict"; 
    
        $('.carousel').carousel({
        
        interval: 4000
    });
    
    
    $('.header .navbar ul li a').addClass('transition');
    
    
    
    // Trigger Nice Scroll Plugin
      $('html').niceScroll({
          cursorcolor: '#9b59b6',
          cursorwidth: 5,
          cursorborder: '1px solid #9b59b6'
      });
    
    // TYped.js
    
    $('.typeme').typed({
       strings : ["The Official Website, You Will Get All Template News"],
       typeSpeed: 3
    });
    
    // Create Scroll To Top Button
      var scrollButton = $('#scroll-top');

      $(window).scroll(function()
      {
        $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();
      });

      scrollButton.click(function()
      {
        $('html,body').animate({ scrollTop : 0 }, 600);
      });
    
});