$(function () {
    $("#left li").on("mouseover", function () {
        // console.log($(this).index());
        var index = $(this).index();
        $("#content").children("div").eq(index).stop().show().siblings().stop().hide();
    })
})

