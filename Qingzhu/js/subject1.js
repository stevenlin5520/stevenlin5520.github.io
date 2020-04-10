var lists = document.getElementsByClassName("subject1_tu_bao")[0];
var lefts = document.getElementsByClassName("icon-fanhui-l")[0];
var rights = document.getElementsByClassName("icon-gengduo")[0];

var count = 0;
lefts.onclick = function () {
    count++;
    if(count === 4){
        count = 0;
    }
    lists.style.left = -285*count+ 'px';
};
rights.onclick = function () {
    count--;
    if(count === -1){
        count = 3;
    }
    lists.style.left = -285*count+ 'px';
}