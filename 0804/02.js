
var count_age = function (n, age) {
    // if (n == 1) {
    //     return age;
    // }
    // else {
    //     return count_age(n - 1, age + 2);
    // }
    return n == 1 ? age : count_age(n - 1, age + 2)
}


console.log(count_age(5, 10));