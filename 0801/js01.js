var x = 15; //羽毛球
var y = 3; //球
var z = 2; //水
for (let i = 1; i < 200 / 15; i++) {
    for (let j = 1; j < 200 / 3; j++) {
        for (let k = 1; k < 200 / 2; k++) {
            if (x * i + y * j + z * k === 200) {
                console.log("羽毛球" + i + "个，球" + j + "个，水" + k + "个");
            }
        }
    }
}