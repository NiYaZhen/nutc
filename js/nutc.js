//獲取左右button
var oLeft = document.querySelector('.left'),
oRight = document.querySelector('.right'),
//獲取全部圖片的集合
aImages = document.querySelectorAll('#did img'),
//獲取全部li的集合
aTab = document.querySelectorAll('.tab li'),
aDid = document.getElementById('did'),
index = 0,//當前索引下標
lastIndex = 0;//上一次圖片的下標
        
//點選小圓點
for(var i = 0;i<aTab.length;i++){
    aTab[i].index = i;
    aTab[i].onclick = function(){
        var This = this.index;//this作用域
        change(function(){
            index = This;
        });
    }
}
//自動播放
//3秒的定時器，滑鼠移入停止
var auto1 = setInterval(rightButton,1500);
aDid.onmouseenter = function(){
    clearInterval(auto1);
}
//滑鼠移出開始
aDid.onmouseout = function(){
    auto1 = setInterval(rightButton,1500);
}


//左單擊事件
oLeft.onclick = function(){
    change(function(){
        index--;
        if(index < 0){
            index = aImages.length-1;
        }
    });
}
//右單擊事件
oRight.onclick = rightButton;
function rightButton(){
    change(function(){
        index++;
        index %= aImages.length;//迴圈
    });
}
//變換函式
function change(callback){
   aImages[lastIndex].className = '';//清除上一次
   aTab[lastIndex].className = '';
   callback();//回撥函式
   aImages[index].className = 'on';
   aTab[index].className = 'on';
   lastIndex = index;
}