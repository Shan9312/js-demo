/**
 * 1. 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * */

var arrList = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

// 思路 1.递归判断参数是否是 数组。是：则遍历数组，若子元素是数组，继续递归判断。否则用空数组push进来
// 2. 生成一个数组， 先排序 在去重
var arrCope = [];

function handleIsArray(arr) {
  if (Array.isArray(arr)) {
    arr.forEach((child) => {
      handleIsArray(child)
    })
  } else {
    arrCope.push(arr);
  }
  return arrCope;
}
var arr = handleIsArray(arrList);
arr.sort((a, b) => {
  return a - b;
})
new Set(arr);
console.log(new Set(arr)); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 }

//