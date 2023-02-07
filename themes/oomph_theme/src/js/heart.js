/**
 * @file
 * Municode base theme main script.
 */
// eslint-disable-next-line func-names
(function ($) {
    Drupal.behaviors.heart = {
      attach(context) {
        console.log('here')
        $('#heart', context).once('slideshow').each((index, heart) => {
          heart =$(heart)
          heart.click(function() {
            console.log('here')
            $('#heart-display').addClass('active')
          })

          $('.container').mouseenter(function () {
            $('.card').stop().animate({
                top: '-90px'
              }, 'slow');
          }).mouseleave(function () {
            $('.card').stop().animate({
                top: 0
            }, 'slow');
          });
        
      });
    },
};
}(jQuery));