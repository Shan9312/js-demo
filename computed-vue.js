/**
 * 实现一个vue 中的computed 函数
 * 当数据传值没发生变化时，不会执行函数
 * */
var mult = function() {
    var res = 1;
    [].forEach.call(arguments, (i) => {
        res = res * i;
    });
    return res;
};
var add = function() {

    return eval([].join.call(arguments, '+'));
}
var proxyFun = (function() {
    var obj = {};
    return function(fn, ...other) {
        var key = `${fn.name}${[].join.call(other)}`;
        if (obj[key]) {
            return obj;
        }
        return obj[key] = fn.apply(this, other);
    }
})()

console.log(proxyFun(mult, 9, 2, 3)); // 54
console.log(proxyFun(add, 9, 2, 3)); // 14