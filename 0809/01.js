var x = ((a, b) => { console.log(this); return a + b })(1, 2);

console.log(x); // 3