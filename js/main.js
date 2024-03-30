

(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

let btn_secudary = document.getElementById('Secundaria');
let btn_primary = document.getElementById('Primaria');

btn_primary.addEventListener("click", function(){
    document.getElementById('art_primaria').style.display = 'grid';
    document.getElementById('art_secundaria').style.display = 'none';

});

btn_secudary.addEventListener("click", function(){
    document.getElementById('art_primaria').style.display = 'none';
    document.getElementById('art_secundaria').style.display = 'grid';

});