var heading = document.querySelector('h1');
heading.textContent = "Gambling";
var pc_num;

var pic_scissor = document.getElementById('scissor')
var pic_paper = document.getElementById("paper")
var pic_stone = document.getElementById('stone')

var remain_money = $("#money").text();
var minus_money = 1000;

var usr_num = Number;
// paper == 2
// stone == 1
// scissor == 0
pic_paper.onclick = function(){
    pc_num = Math.floor(Math.random()*3);
    usr_num = 2;
    // alert("user"+usr_num);
    // alert("pc"+pc_num);
    judge(pc_num, usr_num);
}
pic_stone.onclick = function(){
    pc_num = Math.floor(Math.random()*3);
    usr_num = 1;
    // alert("user"+usr_num);
    // alert("pc"+pc_num);
    // if(true){
    //     $("#paper").css({
    //         "animation-name":"pc_move", 
    //         "animation-duration":"2s",
    //         "animation-delay": "0s",
    //         "animation-iteration-count": "1"
    //     })
    // }
    judge(pc_num, usr_num);


}
pic_scissor.onclick = function(){
    pc_num = Math.floor(Math.random()*3);
    usr_num = 0;
    // alert("user"+usr_num);
    // alert("pc"+pc_num);
    judge(pc_num, usr_num);

}

$("#1000").click(function(){
    minus_money = 1000;
});

$("#2000").click(function(){
    minus_money = 2000;
});

$("#5000").click(function(){
    minus_money = 5000;
});



// paper == 2
// stone == 1
// scissor == 0
function judge(pc_num, usr_num){
    var result = "";
    var num = Number;
    if(pc_num === usr_num){
        result = "equal";
    }
    else if((pc_num === 0 && usr_num === 1) || (usr_num === 0 && pc_num === 2) || (usr_num === 2 && pc_num === 1)){
        result = "user_win";
    }
    else if((pc_num === 1 && usr_num === 0) || (pc_num === 0 && usr_num === 2) || (pc_num === 2 && usr_num === 1)){
        result = "pc_win";
    }
    if(result === "equal"){
        $('#money').text(remain_money);
    }
    else if(result === "user_win"){
        num = parseInt(remain_money) + minus_money;
        remain_money = num;
        $('#money').text(num);
    }
    else if(result === "pc_win"){
        num = parseInt(remain_money) - minus_money;
        remain_money = num;
        $('#money').text(num);
    }
    return result;
};