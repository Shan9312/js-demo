//1. Array.from();a.伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）b.可迭代对象（可以获取对象中的元素,如 Map和 Set 等） 转化为数组

let arr = Array.from('dooly');
// console.log(arr); // [ 'd', 'o', 'o', 'l', 'y' ]
// console.log(Array.from(new Set([1, 2, 3, 4, 2, 1, 2]))) // [1,2,3,4]

//2. Array.isArray() // 判断一个数组是否是Array

// console.log(Array.isArray([1, 3]), Array.isArray({
//     name: 'jss'
// })); // true, false

//3. Array.concat(); 合并多个数组; 返回新数组，不改变原数组
let arr1 = [1, 3, 5, 7]
let arr2 = [2, 4, 6, 8];
let arrSub = arr1.concat(arr2);
// console.log(arrSub); // [ 1, 3, 5, 7, 2, 4, 6, 8 ]

//4. Array.every(函数)； 一般判断数组的第一个元素是否满足条件 
let arr3 = [6, 4, 6, 7];
let isTrue = arr3.every(n => n > 2);
// console.log(isTrue); // false

//5. Array.filter(),Array.map()
// 都会遍历每个数组，返回新数组，不改变原数组
// 区别：filter 满足条件返回该数组的元素，不改变元素本身。不满足则不返回任何
// map: 满足则返回符合条件，可改变改元素本身。不满足则返回undifiend;
let arr5 = [{
        age: 20,
        sex: 'men'
    }, {
        age: 25,
        sex: "women"
    }, {
        age: 26,
        sex: "women"
    },
    {
        age: 28,
    }, {
        age: 28,
        sex: 'men'
    }
];

//环境一：只需要 sex的数组
let arrMap = arr5.map(child => child.sex);
// console.log(arrMap); // [ 'men', 'women', 'women', undefined, 'men' ]
//环境二：只需要 年龄大于25的人
let arrFilter = arr5.filter(obj => obj.age > 25 & obj.sex == 'women');
// console.log(arrFilter); //  [ { age: 26, sex: 'women' } ]


//6. Array.find(),some();indexOf();includes(); 是否满足需要的条件，返回元素或者Boolen
// 区别：find :返回满足条件的数组第一个元素。若没有返回undifind;
// indexOf(),返回满足条件的index，没有返回-1；
// includes(),返回Boolen
// 环境三： 上述arr5中 是否含有女生
let includesBoolen = arr5.map(obj => obj.sex).includes('women');
let indexOfBoolen = arr5.map(obj => obj.sex).indexOf('women');
// console.log(includesBoolen, indexOfBoolen); // true, 1;
// let find = arr5.find(obj => obj.age < 18); //  undefined 
// let some = arr5.some(obj => obj.age > 20); // true


//7. 返回新数组， Array.join().'' , -等等符合。将数组转化为字符串
let arr6 = ['hss', 16, 'is a gril'];
let str6 = arr6.join('-');
// console.log(str6) // hss-16-is a gril

//8. Arrag.reverse(); 改变原数组
arr6.reverse();
// console.log(arr6) // [ 'is a gril', 16, 'hss' ]

//9. Array.sort() 排序， Array.reduce(), 计算
let arr9 = [100, 'a', 'c', 1, 99];
// 环境一
// arr9.sort();
// console.log(arr9); // [ 1, 100, 99, 'a', 'c' ] sort()不传函数，自动转chatCodeAt,utf-16转码对比
// 环境er
arr9.sort((a, b) => a - b);
console.log(arr9); // [ 100, 'a', 'c', 1, 99 ]

// 10 多维数组递归平化数组 如[2, 3, [4, [9], 1], 5])
let deepArr = (arr) => {
    return [].concat(...arr.map(v => (Array.isArray(v) ? deepArr(v) : v))).sort((a, b) => a - b)
};

console.log(deepArr([2, 3, [4, [9], 1], 5])) // [1,2,3,4,5,9]

//11 数组对比找相同集合；如 [1,2,3] [1,2,6]
const diffArr = (arr1, arr2) => {
    const s = new Set(arr2);
    return arr1.filter(v => !s.has(v));
}
console.log(diffArr([1, 3, 4], [1, 2, 3]));