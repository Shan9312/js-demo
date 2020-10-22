function IsURL(str_url) {
    var reg = /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;

    if (reg.test(str_url)) {
        return true;
    } else {
        return false;
    }
}
// console.log(IsURL("https://www.baodu.com"));

// 声明多个变量 解构
let [names, age] = ["hss", 27];
// console.log(names);

// 扩展符 复制
let obj = {
    name: "goods",
    age: 29,
    sex: 1,
};

let copy = {...obj };

const newObj = {...obj, age: 18 };
console.log(newObj);

// 扁平化数组 flat()
const arr = [1, [2, 3], 4, [5, 6, [23, 33]], 9];

console.log(arr.flat(2));

const arrs = [
    { sex: 1, age: 10 },
    { sex: 1, age: 19 },
    { sex: 0, age: 12 },
];

const result = arrs.reduce((list, item) => {
    item.sex === 1 &&
        list.push({ sex: "男", age: item.agt > 18 ? "成年" : "未成年" });
    return list;
}, []);

console.log(result);