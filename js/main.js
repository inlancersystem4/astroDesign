
AOS.init({
    duration: 1200,
});



$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.sticky-header').addClass('bg-white/80 border-gray-200 backdrop-blur-lg py-2');
            $('.sticky-header').removeClass('border-transparent py-5');
        } else {
            $('.sticky-header').removeClass('bg-white/80 border-gray-200 backdrop-blur-lg py-2');
            $('.sticky-header').addClass('border-transparent py-5');
        }
    });


    $(".custom-dropdown").click(function (event) {
        event.stopPropagation();
        $(this).children(".custom-dropdown").toggleClass("hidden");
    });

    $(document.body).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest('.custom-dropdown').length) {
            $('.custom-dropdown').children(".custom-dropdown").addClass('hidden');
        }
    })

    $("#nav-menu").click(function () {
        $(".toggle-nav").toggleClass("hidden")
    })

});

