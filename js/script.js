$(document).ready(function() {
    let $accordions = $('.accordion-wrapper');
    let $headers = $('#accordion-wrapper-1 .panel-header');

    $accordions.each(function () {
        let $currAccordion = $(this).attr('id');
        let $headers = $('#' + $currAccordion).find('.panel-header');

        $headers.each(function (index) {
            $(this).on('click', function (event) {
                event.preventDefault();

                if ($(this).next().hasClass('active')) {
                    $(this).next().removeClass('active');
                    $(this).css('border-bottom', '0px');
                }
                else {
                    $headers.each(function () {
                        $(this).next().removeClass('active');
                        $(this).css('border-bottom', '0px');
                    });
                    $(this).next().addClass('active');
                    $(this).css('border-bottom', '1px solid black');
                }
            });
        });
    });
});