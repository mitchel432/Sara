/**
 * @file
 * Municode base theme main script.
 */
// eslint-disable-next-line func-names
(function ($) {
    Drupal.behaviors.corporation = {
      attach(context) {
        let parent = $('.view-display-id-attachment_1');
        $('.view-corporation .corp__button', context).once('corporation').each((index, value) => {
            let corpId = value.dataset.corpId;
            $(value).on("click", function(event) {
                event.preventDefault();
                let className = ".corp__secondary-image__" + corpId;
                $(className).slideToggle();
                parent.addClass('active');
            });
        });
        $('.view-corporation .close-button', context).once('corporation').each((index, value) => {
            let closeId = value.dataset.corpId;
            $(value).on("click", function(event) {
                event.preventDefault();
                let className = ".corp__secondary-image__" + closeId;
                $(className).slideToggle();
                parent.removeClass('active');
            });
        });
    },
};
}(jQuery));