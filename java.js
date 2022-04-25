$(document).ready(function() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 250) {
            $(".header-fixed").addClass("resized");
        } else {
            $(".header-fixed").removeClass("resized");
        }
    });
});