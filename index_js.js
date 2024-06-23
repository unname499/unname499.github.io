window.onload = function () {
    let divTyping = document.getElementById('text');
    let divTyping2 = document.getElementById('all');
    divTyping2.style.opacity = 0;
    divTyping2.style.display = 'none';
    let i = 0,
        timer = 0,
        str = '欢迎来到我的博客！';

    function typing() {
        if (i <= str.length) {
            divTyping.innerHTML = str.slice(0, i++) + ' |';
            timer = setTimeout(typing, 200);
        } else {
            divTyping.innerHTML = str; //结束打字,移除光标
            clearTimeout(timer);
            divTyping2.style.display = 'block';
            fadeIn(divTyping2, 50);
        }

    }
    typing();
}

function fadeIn(element, speed) {
    if (element.style.opacity != 1) {
        var speed = speed || 30;
        var num = 0;
        var st = setInterval(function () {
            num++;
            element.style.opacity = num / 10;
            if (num >= 10) { clearInterval(st); }
        }, speed);
    }
}
