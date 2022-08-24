// 9. 已知有字符串 get-element-by-id ,写一个 方法将其转化成 驼峰表示法 getElementById

function toCamelCase(str) {
    var arr = str.split('-');
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
    }
    return result;
}

console.log(toCamelCase('get-element-by-id'));