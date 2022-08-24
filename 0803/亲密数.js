var count = 0,sum1=0,sum2=0;
for (var i = 2; i <= 1000; i++) {
    sum1 = 0; //因子和
    for (var j = 1; j < i; j++) {
        if (i % j == 0) {
            sum1 += j;
        }
    }
    for (var a = 2; a <= 1000; a++) {
        sum2 = 0; //因子和
        for (var k = 1; k < a; k++) {
            if (a % k == 0) {
                sum2 += k;
            }
        }
        if (sum1 == a && sum2 == i && i != a) {
            count++;
            console.log(i, a);
        }
    }

}
console.log(count);


// // 求每个数的因子
// for(var i=2;i<48;i++){
//     if(48%i==0){
//         console.log(i);
//     }
// }
// console.log("----------------------------------------------------");
// for(var j=2;j<75;j++){
//     if(75%j==0){
//         console.log(j);
//     }
// }
