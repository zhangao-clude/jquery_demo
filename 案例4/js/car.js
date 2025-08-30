$(function () {
    // let num = 1;
    // console.log($(".checkall"));
    $(".checkall").change(function () {
        // console.log(1);
        var check = $(this).prop("checked");
        $(".j-checkbox").prop("checked", check);
        $(".checkall").prop("checked", check);
        if($(".j-checkbox").prop("checked")){
            $(".j-checkbox").parents(".cart-item").addClass("check-cart-item");
        }else {
            $(".j-checkbox").parents(".cart-item").removeClass("check-cart-item");
        }
    })
    $(".j-checkbox").on("change", function () {
        // console.log($(".j-checkbox").length);
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length){
            $(".checkall").prop("checked", true);
        }else {
            $(".checkall").prop("checked", false);
        }
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })
    $(".increment").on("click", function () {
        var num = 0;
        num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        p_sum = "￥" + (num * p).toFixed(2);
        p = $(this).parents(".p-num").siblings(".p-sum").text(p_sum);
        getPrice();
        getNum();
    })
    $(".decrement").on("click", function () {
       //
        var n = $(this).siblings(".itxt").val();
        n = n - 1;
       if(n <0){
           return false;
       }else{
           $(this).siblings(".itxt").val(n);
       }
        p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        p_sum = "￥" + (n * p).toFixed(2);
        p = $(this).parents(".p-num").siblings(".p-sum").text(p_sum);
        getPrice();
        getNum();
    })
    function getNum() {
        // var n = $(".itxt").val();
        var n = 0;
        // console.log(n);
        $.each($(".itxt"), function (index, value) {
            // console.log(index, value)
            n += parseInt($(value).val());
        })
        $(".amount-sum em").text(n);
        // console.log(n);
    }
    function getPrice() {
        var n = 0;
        $.each($(".p-sum"), function (index, value) {
            // console.log(index, value)
            n += parseFloat($(value).text().substr(1));
        })
        // console.log(n);
        $(".price-sum").find("em").html("￥" + n.toFixed(2));
    }
    // getPrice();
    $(".clear-all").on("click", function () {
        console.log(1);
        $(this).parents(".cart-floatbar").siblings(".cart-item-list").remove();
        getPrice();
        getNum();
    })
    $(".p-action").on("click", function () {
        $(this).parents(".cart-item").remove();
        getPrice();
        getNum();
    })
    $(".remove-batch").on("click", function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getPrice();
        getNum();
    })
})