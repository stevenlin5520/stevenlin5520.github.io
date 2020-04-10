//验证码
var verify = document.getElementById("verify");
var str = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890";

var strN = '';
function change() {
    var str1 = "";
    for(var i=0;i<4;i++){
        str1+=str[gerRundom(0,61)];
    }
    verify.innerHTML = str1;
    strN = str1;
}
change();
verify.onclick = change;

function gerRundom(n,m) {
    if(n>m){
        var t = n;
        n = m;
        m = t;
    }
    n = Math.ceil(n);
    m = Math.floor(m);
    return Math.round(Math.random()*(m-n)+n);
}

//登录表单验证
var form = document.getElementsByTagName('form')[0];
var yan = document.getElementById("yan");
var usernameInp = form.username;
var passwordInp = form.password;
var submit = document.getElementById('submit');
var input = form.getElementsByTagName('input');

for (var i = 0; i < input.length-1;i++){
    input[i].setAttribute('flag',0);
}
usernameInp.onblur = function () {
    blurFn(this);
};
passwordInp.onblur = function () {
    blurFn(this);
};

yan.onblur = function () {
    var val = this.value;
    if(val.toLocaleLowerCase()===strN.toLocaleLowerCase()||val===null){
        this.setAttribute('flag',1);
        this.style.border = "2px solid green";
    }else if(val===""){
        that.setAttribute('flag',0);
        that.style.border = "1px solid #aaa";
    }else{
        this.setAttribute('flag',0);
        this.style.border = "2px solid red";
    }
};

function blurFn(that) {
    var val = that.value;
    var reg;
    //根据input的name属性值选择应该使用的正则表达式
    switch (that.name){
        case "username":reg = /^\w{5,15}$/;break;
        case "password":reg = /^\w{6,18}$/;break;
    }
    var res = reg.test(val);
    if(res){
        console.log(val);
        that.setAttribute('flag',1);
        that.style.border = "2px solid green";
    }else if(val===""){
        that.setAttribute('flag',0);
        that.style.border = "1px solid #aaa";
    }else{
        that.setAttribute('flag',0);
        that.style.border = "2px solid red";
    }
}
//点击提交的时候，获取每个输入框的flag，加起来等于5说明全部通过正常提交表单，否则阻止表单提交
submit.onclick = function () {
    var total = 0;
    for(var i= 0; i < input.length-1; i++){
        total += Number(input[i].getAttribute('flag'));
    }
    if(total!==3){
        change();
        return false;//阻止表单提交
    }
};


//两个input内文字的移动
$(".center_font").click(function () {
    // $(".center_font").each(function () {
    $(this).children(".font").addClass("active");
    $(this).children("input").focus();

    // })
});
$(".center_font input").blur(function () {
    if(!$(this).val()){
        $(this).prev(".font").removeClass("active");
    }

})