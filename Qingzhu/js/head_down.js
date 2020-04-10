//切换图片方法
function changeImg(a) {//a代表要切换第几张图片
    $('.head_down .head_down_list li').eq(a).fadeIn(500).siblings().fadeOut(500);
    //焦点跟随
    $('.head_down .focusList span').eq(a).addClass('active').siblings().removeClass('active');
}
var step = 0;
var timer;
//自动切换
function autoPlay() {
    timer =  setInterval(function () {
        step++;
        if(step===5){
            step = 0;
        }
        changeImg(step);
    },2000);
}
autoPlay();

//点击焦点切换对应索引的哪一张
$('.focusList span').click(function () {
    step = $(this).index();
    changeImg(step);
});
//鼠标移入图片，停止自动切换，移出继续自动切换
$('.head_down').mouseenter(function () {
    clearInterval(timer);
}).mouseleave(function () {
    autoPlay();
});