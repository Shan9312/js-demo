// 实现一个深拷贝
const obj = {
    test: {
        a: {
            a_child: {
                a_son_child: 'hellow',
                bb: 22
            },
            b: 11,
            cc: {
                c: 111
            }
        }
    }
}

//方法一： 实现深拷贝 JSON.stringify();
// let copyObj = JSON.parse(JSON.stringify(obj));
// copyObj.test = {
//     name: "hss",
//     age: 23
// }

//方法二： 递归遍历
function copyData(data) {
    let copyObj = Array.isArray(data) ? [] : {};
    for (key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'object') {
                const element = data[key];
                copyData(element);
            } else {
                copyObj[key] = data[key];
            }
        }
    }

    return copyObj;
}

// let copyObj2 = copyData(obj);
console.dir(copyData(obj));