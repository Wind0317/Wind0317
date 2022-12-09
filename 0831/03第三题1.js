// 3. 现有数字，请将数据转换成格式（推荐使用正则表达式+replace的方式完成），如12345678转换成12,345,678
var num = '1234567';
// var result = num.replace(/(?!^)(?=(\d{3})+$)/g, ',');
var result = num.replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,');
console.log(result);