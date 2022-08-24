// 分书问题
var zhang = [3, 4];
var wang = [1, 2, 5];
var li = [2, 3];
var zhao = [1, 2, 4];
var qian = [2, 5];
var result = [];
console.log("zhang wang li zhao qian");
for (let i = 0; i < zhang.length; i++) {
    for (let j = 0; j < wang.length; j++) {
        for (let k = 0; k < li.length; k++) {
            for (let l = 0; l < zhao.length; l++) {
                for (let m = 0; m < qian.length; m++) {
                    if (zhang[i] + wang[j] + li[k] + zhao[l] + qian[m] == 15 && zhang[i] * wang[j] * li[k] * zhao[l] * qian[m] == 120) {
                        result.push([zhang[i], wang[j], li[k], zhao[l], qian[m]]);
                    }
                }
            }
        }
    }
}
console.log(result);
result = [];



// for (let zhang = 0; zhang <= 5; zhang++) {
//     for (let wang = 0; wang <= 5; wang++) {
//         for (let li = 0; li <= 5; li++) {
//             for (let zhao = 0; zhao <= 5; zhao++) {
//                 for (let qian = 0; qian <= 5; qian++) {
//                     if (zhang + wang + li + zhao + qian == 15 && zhang * wang * li * zhao * qian == 120) {
//                         if((zhang==3||zhang==4)&&(wang==1||wang==2||wang==4)&&(li==2||li==3)&&(zhao==1||zhao==2||zhao==4)&&(qian==2||qian==5)){
//                             console.log(zhang,wang,li,zhao,qian);
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
