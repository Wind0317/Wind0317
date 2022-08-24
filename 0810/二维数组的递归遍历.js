// 二维数组的递归遍历
function traverse(data, callback) {
    if (data instanceof Array) {
        data.forEach(function (item) {
            traverse(item, callback);
        });
    } else {
        callback(data);
    }
}
var arr = [
    ["颜一鸣", "李心悦", ["李康", "贺锐"]],
    ["陈韩家", ["许才奇", "何祥宇"], "张恒"],
    "陈韩家",
    [10, [20, [30, 40]]]
];
traverse(arr, function (item) {
    console.log(item);
});

