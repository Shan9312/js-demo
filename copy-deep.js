
// 实现一个深拷贝
const obj = {test: {
  a: {
    a_child: {
      a_son_child: 'hellow',
      bb: 22
    },
    b: 11,
    cc :{ c:111}
  },
  fun:function() {
    console.log('function')
  }
}}
function copyData(data) {
  const result = Array.isArray(data) ? [] : {}; // 判断传入的值是数组类型还是对象类型
  for (const key in data) {
    if (data.hasOwnProperty(key)) { // hasOwnProperty hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
      if (typeof data[key] === 'object') { // typeof 判断类型 缺点：不能区分对象、数组、正则，对它们操作都返回"object"
        const element = data[key];
        copyData(element);
      } else {
        result[key] = data[key];
      }      
    }
  }
  return result;
}
const copyResult = copyData(obj) 
console.dir(copyResult);// { a_son_child: 'hellow', bb: 22 }, { c: 111 },{ b: 11 },{},{}
copyResult.fun=function() {
  console.log('fun');
};
copyResult.c=222;
copyResult.b = 22;
console.log(copyResult);
console.log(obj.test.fun);
console.log(obj.test.a.cc);


