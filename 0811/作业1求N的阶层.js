// 递归求阶层
function sum(n){
    return n > 1 ? n * sum(n - 1) : 1;
}
console.log(sum(5));


