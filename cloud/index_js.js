var temp0 = 0;
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;

function hideandseek(classes) { //小学生，英语词汇少，勿喷；如有语法错误请告知邮件: infinity_BETA@outlook.com，或QQ：1300443974
    var ul = document.getElementsByClassName(classes)
    if (classes == "a") {
        if (temp0 == 0) {
            ul[0].style.display = "block";
            temp0 = 1;
        } else {
            ul[0].style.display = "none";
            temp0 = 0;
        }
    } else if (classes == "b") {
        if (temp1 == 0) {
            ul[0].style.display = "block";
            temp1 = 1;
        } else {
            ul[0].style.display = "none";
            temp1 = 0;
        }
    } else if (classes == "c") {
        if (temp2 == 0) {
            ul[0].style.display = "block";
            temp2 = 1;
        } else {
            ul[0].style.display = "none";
            temp2 = 0;
        }
    } else {
        if (temp3 == 0) {
            ul[0].style.display = "block";
            temp3 = 1;
        } else {
            ul[0].style.display = "none";
            temp3 = 0;
        }
    }
}