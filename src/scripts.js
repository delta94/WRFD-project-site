// (function($) {
//     "use strict";

//     $('.dropdown').hover(function() {
//       $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
//     }, function() {
//       $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
//     });

//     $('body').scrollspy({
//         target: '.fixed-top',
//         offset: 60
//     });
    
//     $('a.page-scroll').bind('click', function(event) {
//         var $ele = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($ele.attr('href')).offset().top - 60)
//         }, 1450, 'easeInOutExpo');
//         event.preventDefault();
//     });
    
//     $('#collapsingNavbar li a').click(function() {
//         $('.navbar-toggler:visible').click();
//     });

//     $('#galleryModal').on('show.bs.modal', function (e) {
//        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
//     });

// })(jQuery);