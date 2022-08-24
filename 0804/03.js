
//最小公倍数，我给你2个数，你还我1个最小公倍数
function gbs(m, n) {
    return m * n / gys(m, n);
}

//最大公约数，我给你2个数，你还我1个最大公约数
function gys(m, n) {
    //更相减损术
    if (m % n == 0) {
        return m;
    } else if (m > n) {
        return gys(m - n, n)
    } else {
        return gys(n - m, m)
    }
}

console.log(gys(12, 18));
console.log(gbs(12, 18));
