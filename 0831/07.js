// dgfhfgh254.45bhku289fgdhdy675gfh获取一个字符串中的数字字符，并按数组形式输出。输出
// [254,289,675]
var str = "dgfhfgh254.45bhku289fgdhdy675gfh"

// 使用exec提取并遍历
var reg = /\d+(\.\d+)?/g;
var result = reg.exec(str);
var arr = [];
while (result) {
    console.log(result);
    arr.push(parseInt(result[0]));
    result = reg.exec(str);
}
console.log(arr);