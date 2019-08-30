/**
 * 判断js 类型的4种方法
 * 
 * */

// 方法一： typeof 类型判断 优点：判断 number,string,boolen,function,undefind ;缺点 无法区分 null,数组和对象

let str = 'test'
let bool = true;
let fun = function () {
  console.log('this is my siter');
}
let unde = undefined;
let arr = [1, 3, 4];
let nul = null
console.log(typeof (str), typeof (bool), typeof (fun), typeof (unde), typeof (arr), typeof (nul));
//答案：  string boolean function undefined object object

// 方法二 instanceof
// 缺点： 对于基本类型如果不是用new声明的则也测试不出来。对于是使用new声明的类型，它还可以检测出多层继承关系。

let str1 = 'www'
let arr1 = [2, 6]
let null1 = null;
let obj1 = {
  name: 'jj'
}
let str2 = new String();
console.log(str1 instanceof String) // false
console.log(str2 instanceof String) // true

// 使用方法三 constructor [undefined和null没有contructor属性]

let str3 = 'jj';
console.log(str3.construct)