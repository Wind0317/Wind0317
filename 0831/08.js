// 8. 写一个正则表达式，匹配班级的学号从 H22040001~H22049999
var reg = /^H2204(?!0000)\d{4}$/;
console.log(reg.test('H22040001'));
console.log(reg.test('H22049999'));
console.log(reg.test('H2204999999'));