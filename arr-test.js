let arr = ['1', '2', '3'];
arr.map(parseInt);
console.log(arr.map(item => parseInt(item))); // [1, NaN, NaN]
arr.filter(item => item > 1);
console.log(arr.filter(item => item > 1));
console.log(parseInt('2', 1)); // NaN, parseInt(目标值,进制数) 表示数中 不能大于1的数，而2>1 ,则返回nan