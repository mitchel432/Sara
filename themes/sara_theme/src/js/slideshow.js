/**
 * @file
 * Municode base theme main script.
 */
// eslint-disable-next-line func-names
(function ($) {
    Drupal.behaviors.slideshow = {
      attach(context) {
        $('.base-page__slideshow', context).once('slideshow').each(() => {
            /**
             * Configures slideshow and adds toggle pause button
             */
            const carasoul = $('.field--name-field-slideshow');

            if (carasoul.length > 0) {
                console.log('inside')
                carasoul.slick({
                    infinite: true,
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1080,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }

        
    });
    },
};
}(jQuery));