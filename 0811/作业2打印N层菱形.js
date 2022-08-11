// 打印上下对称的菱形
function printTriangle(n) {
    // 先打印上面
    for (let i = 1; i <= n; i += 2) {
        let str = '';
        for (let k = 1; k <= ~~((n - i) / 2); k++) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
    // 再打印下面
    for (let i = n; i >= 1; i -= 2) {
        let str = '';
        for (let k = 1; k <= ~~((n - i) / 2); k++) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}

function ArrayPrintTriangle(n) {
    var arr = [];
    for (let i = 1; i <= n; i += 2) {
        let str = '';
        for (let k = 1; k <= ~~((n - i) / 2); k++) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        arr.push(str);
    }
    arr.forEach(function (item) {
        console.log(item);
    });
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
ArrayPrintTriangle(17);
// printTriangle(7);



