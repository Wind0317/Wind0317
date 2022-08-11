// 杨辉三角的打印
var triangle = function (n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        var row = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }
    return result
}
var result = triangle(10);
result.forEach(function (item, index) {
    var content = "";
    for (var i = 0; i < 13 - index; i++) {
        content += " ";
    }
    content += item.join(" ");
    console.log(content);
});