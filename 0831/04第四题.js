// 4. 写一个正则表达式，匹配1~15之间的任意数

var reg = /^(1([0-4]((\.\d+)?)|5)|[1-9](\.\d+)?)$/;
console.log(reg.test('1'));
console.log(reg.test('5.6'));
console.log(reg.test('15.1'));
console.log(reg.test('16'));
console.log(reg.test('1190000'));           1