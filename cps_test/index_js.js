var check = 0;
globalThis.time = 10;
globalThis.btn2 = null;
globalThis.label = null;
globalThis.label2 = null;
globalThis.btn3 = null;
globalThis.dark = null;
globalThis.light = null;
globalThis.select = null;

window.onload = function () {
    btn2 = document.getElementById("start");
    label = document.getElementById("cps");
    btn3 = document.getElementById("reset");
    dark = document.getElementById("dark");
    light = document.getElementById("light");
    label2 = document.getElementById("check");
    select = document.getElementById("se");
    select.selectedIndex = 2;
    btn3.disabled = true;
}


function start()
{
    label2.innerHTML = "点击次数：" + (check + 1);
    btn2.innerHTML = "请用您最快的速度点击此按钮";
    check = check + 1;
    if (check == 1)
    {
        btn3.style.display = "block";
        setTimeout(fctn, time * 1000);
        btn3.style.backgroundColor = "#b2beb5";
        btn3.disabled = true;
    }
}

function fctn()
{
    label.innerHTML = "CPS：" + check / time;
    alert("您已经完成测试，您的CPS为：" + check / time);
    btn2.innerHTML = "已完成测试";
    btn2.style.backgroundColor = "#b2beb5";
    btn2.disabled = true;
    btn3.style.backgroundColor = "#0080ff";
    btn3.disabled = false;
}

function reset()
{
    btn2.innerHTML = "开始吧！";
    btn2.style.backgroundColor = "#0080ff";
    check = 0;
    label.innerHTML = "";
    btn2.disabled = false;
    label2.innerHTML = "未记录";
}

function darktheme() {
    document.body.style.backgroundColor = "#212529";
    document.body.style.color = "#f0f0f0";
}

function lighttheme() {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.color = "black";
}

function ifs()
{
    var index = select.selectedIndex;
    switch (index)
    {
        case 0:
            time = 1;
            break;
        case 1:
            time = 5;
            break;
        case 2:
            time = 10;
            break;
        case 3:
            time = 60;
            break;
        case 4:
            time = 100;
            break;
    }
}