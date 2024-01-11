//在此特别感谢博客园的酸suan（https://www.cnblogs.com/isuansuan，具体方法：https://www.cnblogs.com/isuansuan/p/12738333.html）
window.onload = function() {
    let divTyping = document.getElementById('text');
    let i = 0,
        timer = 0,
        str = '这里是虚无之地！(This is the land of nothingness.)';

    function typing() {
        if (i <= str.length) {
            divTyping.innerHTML = str.slice(0, i++) + ' |';
            timer = setTimeout(typing, 200);
        } else {
            divTyping.innerHTML = str; //结束打字,移除光标
            clearTimeout(timer);
            setTimeout(function() { window.close() }, 5000);
        }
    }
    typing();
}