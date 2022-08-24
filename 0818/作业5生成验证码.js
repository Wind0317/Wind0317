// 随机生成四位数的验证码 a-z A-Z 0-9

function getRandomCode() {
    var arr = [];
    for (var i = 0; i < 4; i++) {
        var num = ~~(Math.random() * 62);
        if (num < 10) {
            arr.push(num);
        } else if (num < 36) {
            arr.push(String.fromCharCode(num + 55));
        } else {
            arr.push(String.fromCharCode(num + 61));
        }
    }
    return arr.join('');
}

console.log(getRandomCode());