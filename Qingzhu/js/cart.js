/**
 * Created by Administrator on 2018\9\14 0014.
 */

<!--实现购物车内物品数量的加减-->
$("ul").on("click",".sub",function () {
    var strInt = parseInt($(this).siblings(".count").html());
    if(strInt>1){
        var count = strInt-1;
    }else{
        alert("物品数量不能低于1");
    }
    $(this).siblings(".count").html(count);
    oneMoney(this);
    allCount();
});
$("ul").on("click",".add",function () {
    var count = parseInt($(this).siblings(".count").html())+1;
    $(this).siblings(".count").html(count);
    oneMoney(this);
    allCount();
});

<!--单个物品的金额-->
function oneMoney(that) {
    var price = 0;
    var counts = 0;
    prices = parseInt($(that).parent().siblings(".price").html());
    counts = parseInt($(that).siblings(".count").html());
    var oneMoneys =prices*counts;
    $(that).parent().siblings(".oneMoney").html(oneMoneys);
}
<!--物品的总量及总金额-->
function allCount() {
    var allPrice = 0;
    var allCount = 0;
    $("ul :checked").each(function () {
        allPrice+=parseInt($(this).siblings(".oneMoney").html());
        allCount+=parseInt($(this).siblings("div").children(".count").html());
    });
    $(".allChoose").html(allCount);
    $(".allMoney").html(allPrice);
};

<!--选择-->
$("ul :checkbox").click(function () {
    allCount();
    if($("ul :checkbox").length===$("ul :checked").length){
        $(".chooseAll").prop("checked",true);
    }else{
        $(".chooseAll").prop("checked",false);
    }
});

$(".chooseAll").click(function () {
    if($(this).prop("checked")){
        $("ul input").each(function () {
            $("ul input").prop("checked",true);
            $(this).parent().css("background-color",'#fffbea');
        })
        $(".chooseAll").prop("checked",true);
    }else{
        $("ul input").each(function () {
            $("ul input").prop("checked",false);
            $(this).parent().css("background-color",'#fff');
        })
        $(".chooseAll").prop("checked",false);

    }
    allCount();
});

<!--删除购物车的内容-->
$(".cart_out_two .del").click(function () {
    $(this).parent().remove();
    allCount();
});

<!--选中改变背景颜色-->
$("li").click(function () {
//        console.log($(this).find("input").eq(0).prop("checked"));
//        console.log($(this).children('.choose').prop("checked"));
    if($(this).find("input").eq(0).prop("checked")){
        $(this).css("background-color",'#fffbea');
    }else{
        $(this).css("background-color",'#fff');
    }
});
<!--固定定位模块-->
$(window).scroll(function () {
    var htmlH = $(".cart_out").offset().top;
    var allHtmlH = htmlH+$(".cart_inner").outerHeight(true);
    var browser = $(window).innerHeight();//浏览器可视区
    var ta = browser-allHtmlH;

    if($(document).scrollTop()<=ta){
        $(".cart_out_three_out").css({
            position:"fixed",
            // top:$(window).innerHeight()-$(".cart_out_three").innerHeight(),
            bottom:0,
            left:0

        })
    }else{
        $(".cart_out_three_out").css({
            position: "static"
        })
    }
})