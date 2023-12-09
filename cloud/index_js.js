var temp0 = 0;
var temp1 = 0;
var temp2 = 0;

function hideandseek(classes) {
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
    } else {
        if (temp2 == 0) {
            ul[0].style.display = "block";
            temp2 = 1;
        } else {
            ul[0].style.display = "none";
            temp2 = 0;
        }
    }
}