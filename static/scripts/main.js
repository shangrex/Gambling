var heading = document.querySelector('h1');
heading.textContent = "Gambling";
var pc_num;

var pic_scissor = document.getElementById('scissor')
var pic_paper = document.getElementById("paper")
var pic_stone = document.getElementById('stone')

var remain_money = $("#money").text();
var minus_money = 1000;

var usr_num = Number;
var now;
// paper == 2
// stone == 1
// scissor == 0
pic_paper.onclick = function(){
    pc_num = Math.floor(Math.random()*3);
    now = Date.now();
    usr_num = 2;
    // alert("user"+usr_num);
    // alert("pc"+pc_num);
    if(pc_num == 0){
        $("#scissor").attr("src", "../static/images/new_scissors.png");
    }
    else if(pc_num == 1){
        $("#stone").attr("src", "../static/images/new_rock.png");
    }
    else if(pc_num == 2){
        $("#paper").attr("src", "../static/images/new_paper.png");
    }
    window.setTimeout(function() {
        if(pc_num == 0){
            $("#scissor").attr("src", "../static/images/noun_Scissors_88666.png");
        }
        else if(pc_num == 1){
            $("#stone").attr("src", "../static/images/noun_rock_88661.png");
        }
        else if(pc_num == 2){
            $("#paper").attr("src", "../static/images/noun_Paper_88662.png");
        }
    }, 2000);
    judge(pc_num, usr_num);
}
pic_stone.onclick = function(){
    pc_num = Math.floor(Math.random()*3);
    now = Date.now();
    usr_num = 1;
    // alert("user"+usr_num);
    // alert("pc"+pc_num);
    if(pc_num == 0){
        $("#scissor").attr("src", "../static/images/new_scissors.png");
    }
    else if(pc_num == 1){
        $("#stone").attr("src", "../static/images/new_rock.png");
    }
    else if(pc_num == 2){
        $("#paper").attr("src", "../static/images/new_paper.png");
    }
    window.setTimeout(function() {
        if(pc_num == 0){
            $("#scissor").attr("src", "../static/images/noun_Scissors_88666.png");
        }
        else if(pc_num == 1){
            $("#stone").attr("src", "../static/images/noun_rock_88661.png");
        }
        else if(pc_num == 2){
            $("#paper").attr("src", "../static/images/noun_Paper_88662.png");
        }
    }, 1000);
    judge(pc_num, usr_num);


}
pic_scissor.onclick = function(){
    pc_num = Math.floor(Math.random()*3);
    now = Date.now();
    usr_num = 0;
    // alert("user"+usr_num);
    // alert("pc"+pc_num);
    if(pc_num == 0){
        $("#scissor").attr("src", "../static/images/new_scissors.png");
    }
    else if(pc_num == 1){
        $("#stone").attr("src", "../static/images/new_rock.png");
    }
    else if(pc_num == 2){
        $("#paper").attr("src", "../static/images/new_paper.png");
    }
    window.setTimeout(function() {
        if(pc_num == 0){
            $("#scissor").attr("src", "../static/images/noun_Scissors_88666.png");
        }
        else if(pc_num == 1){
            $("#stone").attr("src", "../static/images/noun_rock_88661.png");
        }
        else if(pc_num == 2){
            $("#paper").attr("src", "../static/images/noun_Paper_88662.png");
        }
    }, 1000);
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
    if(parseInt(remain_money) < 0){
        alert("菜雞破產啦~")
    }
    return result;
};