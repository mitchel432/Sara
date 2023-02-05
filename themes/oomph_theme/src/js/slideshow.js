/**
 * @file
 * Municode base theme main script.
 */
// eslint-disable-next-line func-names
(function ($) {
    Drupal.behaviors.slideshow = {
      attach(context) {
        $('.field--name-field-slideshow', context).once('slideshow').each((index, slideshow) => {
            /**
             * Configures slideshow and adds toggle pause button
             */
            slideshow = $(slideshow);

            if (slideshow.length > 0) {
                slideshow.slick({
                    infinite: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true,
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
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
            
            let slides = slideshow.find('.slick-slide').not('.slick-cloned');
            let firstIndex = $(slides[0]).data('slick-index');
            let lastIndex = $(slides[slides.length-1]).data('slick-index');
            // Reset to all slides
            slides = slideshow.find('.slick-slide')
            let currentIndex = 0;
            console.log(firstIndex, lastIndex)
           
            slides.click(function(slide) {
                clickedIndex = $(this).data('slick-index')
                isLoopNext = (currentIndex == lastIndex + 1 && clickedIndex == firstIndex + 1)
                isLoopPrev = (currentIndex == (firstIndex - 1) && clickedIndex == (lastIndex - 1))
                isNextSlide = (clickedIndex > currentIndex && !isLoopPrev)
                console.log(currentIndex, clickedIndex, isLoopNext, isLoopPrev)
                if (isNextSlide || isLoopNext) {
                    slideshow.slick('slickNext');
                    currentIndex = clickedIndex;
                }
                else if (clickedIndex != currentIndex) {
                    slideshow.slick('slickPrev');
                    currentIndex = clickedIndex;
                }
                
            })
        
    });
    },
};
}(jQuery));