// 多维数组递归平化数组 如[2, 3, [4, [9], 1], 5])
let deepArr = (arr) => {
    return [].concat(...arr.map(v => (Array.isArray(v) ? deepArr(v) : v))).sort((a, b) => a - b)
};

console.log(deepArr([2, 3, [4, [9], 1], 5])) // [1,2,3,4,5,9]

//数组对比找相同集合；如 [1,2,3] [1,2,6]
const diffArr = (arr1, arr2) => {
    const s = new Set(arr2);
    return arr1.filter(v => !s.has(v));
}
console.log(diffArr([1, 3, 4], [1, 2, 3]));