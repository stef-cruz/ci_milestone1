// Script used to change navbar colour on scroll, taken from https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});