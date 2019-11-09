// 自动执行函数
// 特点： 在一个单独的函数作用蜮 执行，避免变量冲突
(function() {
    let arr = [1, 3];
    for (i = 2; i < 8; i++) {
        arr.push(i);
    }
    console.log(arr)
})();

// AMD： 使用requireJs 变形模块化。
// 特点： 依赖必须提前声明好

var exmple = require('./adm.js');
console.log(exmple.add(10)); // 11
console.log(exmple.valid('hss')); // true