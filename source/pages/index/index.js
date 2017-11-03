
import 'normalize.css';
import './index.scss';

// index rising counter (4 blocks)
 (function($) {
     $(window).scroll(function() {
         $('.js-section').each(function() {
             var imagePos = $(this).offset().top;
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow + 600) {
                 showContent(this);
             }
         });
     });

     var title = $('.meetup .js-title');
     var text = $('.meetup .js-text');
     var arrow = $('.meetup .stage');
     var cont = $('.meetup .container');

     var firstTitlepart = $('.header__title span').first();
     var secondTitlepart = $('.header__title span').last();

     setTimeout(function() {
       arrow.addClass('loaded');
     }, 0);

     setTimeout(function() {

       text.addClass('loaded');
       title.addClass('loaded');

       cont.addClass('loaded');
       $('.header__title').addClass('loaded');



     }, 500);


     function showContent(param) {

       $(param).find('.stage').addClass('loaded');

       setTimeout(function() {

         $(param).find('.js-title').addClass('loaded');
         $(param).find('.js-text').addClass('loaded');
         $(param).find('.container').addClass('loaded');

       }, 500);


     }


    //  arrows animations
    // $(window).scroll(function() {
    //     $('.js-section').each(function() {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 400) {
    //             showArr(this);
    //         }
    //     });
    // });
    //
    // function showArr(param) {
    //
    //
    //
    // }




 })(jQuery);
 // EOF index rising counter (4 blocks)


// $('.js-section .arrow').
