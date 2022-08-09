
for (var m = 9000; m <= 9999; m++) {
    for (var a = 10; a <= 99; a++) {
        for (var b = 10; b <= 99; b++) {
            for (var c = 100; c <= 999; c++) {
                if ((m - 1) / 809 == a && a * 8 == b && a * 9== c) {
                    console.log(a, m, b, c+1,c);
                }
            }
        }
    }

}
