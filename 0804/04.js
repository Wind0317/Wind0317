// 猴子分桃 递归法
function fentao(n, count) {
    if (count == 5) {
        return true;
    } else {
        if (n % 5 == 1) {
            return fentao((n - 1) / 5 * 4, count + 1);
        } else {
            return false;
        }
    }
}
for (var i = 1; ; i++) {
    if (fentao(i, 0)) {
        console.log(i);
        break;
    }
}