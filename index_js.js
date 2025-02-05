window.onload = function() {
    let divTyping2 = document.getElementById('all');
    divTyping2.style.opacity = 0;
    fadeIn(divTyping2, 10);
}

function fadeIn(element, speed) {
    if (element.style.opacity != 1) {
        var speed = speed || 30;
        var num = 0;
        var st = setInterval(function() {
            num++;
            element.style.opacity = num / 10;
            if (num >= 10) { clearInterval(st); }
        }, speed);
    }
}
