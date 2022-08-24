// 6. 产生一个20~100(包含100)之间的随机数10个，
// 把它放在一个数组里面，数组里面的随机数不重复
function randomNumTen() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        var num = Math.floor(Math.random() * 80 + 20);
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        } else {
            i--;
        }
    }
    return arr;
}
console.log(randomNumTen());
