// var chengniu = []
// var xiaoniu = [1]
// for (var i = 1; i < 20; i++) {
//     if (i <= 3) {
//         xiaoniu[i] = xiaoniu[i - 1];
//         chengniu[i] = 0;
//     } else if (i <= 9) {
//         xiaoniu[i] = chengniu[i - 1] + xiaoniu[i - 1] - xiaoniu[i - 4];
//         chengniu[i] = chengniu[i - 1] + xiaoniu[i - 4];
//     } else {
//         xiaoniu[i] = chengniu[i - 1] + xiaoniu[i - 1] - xiaoniu[i - 4];
//         chengniu[i] = chengniu[i - 1] + xiaoniu[i - 4] - chengniu[i - 6];
//     }
// }
// console.log(xiaoniu[19]+chengniu[19]);


