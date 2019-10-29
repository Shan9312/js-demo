let deepArr = (arr) => [].concat(...arr.map(v => (Array.isArray(v) ? deepArr(v) : v))).sort((a, b) => a - b);

console.log(deepArr([2, 3, [4, [9], 1], 5])) // [1,2,3,4,5,9]