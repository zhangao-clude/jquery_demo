$(function () {
    $(".king ul li").on("mouseenter", function () {
        // alert(1);
        $(this).stop().animate({
            width: 224
        }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
        $(this).siblings("li").stop().animate({
            width: 69
        }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
    })




});
