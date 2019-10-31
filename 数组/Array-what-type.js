let arr = ['hss', [1, 2], 26];
// 方法一： Array.isArray();
console.log(Array.isArray(arr)); // true
// 方法二： instanceof
console.log(arr instanceof Array); // true
// 方法三： Object.prototype.toString.call()
console.log(Object.prototype.toString.call(arr) == "[object Array]") // true