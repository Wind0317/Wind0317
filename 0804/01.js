// 定义一个函数韩宏🐏
function 韩宏扬(obj, fn) {
    if (Array.isArray(obj)) {
        // 遍历数组
        for (let i = 0; i < obj.length; i++) {
            if (fn.apply(obj[i], [i, obj[i]]) === false) {
                break
            }
        }
    } else {
        // 遍历对象
        for (let key in obj) {
            if (fn.apply(obj[key], [key, obj[key]]) === false) {
                break
            }
        }
    }
}
// 定义一个数组
let arr = [1, 2, 3, 4, 5]
韩宏扬(arr, function (index, item) {
    console.log(item)
})
// 定义一个对象
let obj = {
    name: '韩宏扬',
    age: 18,
}
韩宏扬(obj, function (key, value) {
    console.log(key, value)
})