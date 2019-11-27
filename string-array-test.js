/**
 * 
 * 考察string,array的api 使用
 * */
var str = 'abcd'; // 希望得到d-c-b-a;
console.log(str.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('-')); //  d-c-b-a

/**
 * 实现一个深浅拷贝
 * 
 * */
var obj = {
        age: '26',
        sex: 'women',
        list: ['hss', 'zj', 'double']
    }
    // 浅拷贝 Object.assign() 或者 for...in..;
var copyObj = Object.assign({}, obj);
copyObj.age = 20;
copyObj.list.push('sansan'); // 引用类型数组都改变，受到影响
// console.log(copyObj, obj);

// 深拷贝 JSON.parse(JSON.strifing(xx)) 或者 递归复值
function copyArrDeep(obj) {
    var copeObj = Array.isArray(obj) ? [] : {};
    for (key in obj) {
        if (obj[key]) {
            if (typeof(obj.key) === 'object') {
                copyArrDeep(obj[key]);
            } else {
                copeObj[key] = obj[key]
            }
        }
    }
    return copeObj;
}

let testCope = copyArrDeep(obj);
testCope.list.push('99999')
console.log(testCope, obj)