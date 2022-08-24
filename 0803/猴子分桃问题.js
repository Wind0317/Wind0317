// 猴子分桃问题
for (var i = 1; ; i++) {
    let a = i;
    let count = 0;
    if (i % 5 === 1) {
        count++;
        for (var j = 2; j <= 5; j++) {
            if ((a - (a - 1) / 5 - 1) % 5 == 1) {
                count++;
            }
            a = a - (a - 1) / 5 - 1;
        }
        if (count == 5) {
            console.log(a);
            console.log(i);
            break;
        }
    }
}

