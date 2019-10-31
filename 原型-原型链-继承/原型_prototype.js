// 1. 构造函数： 可以通过new 创建对象的函数 是构造函数。如下 Object 是构造函数
// 2. 实例：通过构造函数和new创建出来的对象，便是实例； 实例通过__proto__指向原型，通过constructor指向构造函数。
// 3. 原型： 一个简单的对象，用于实现对象的 属性继承；（可以简单的理解成对象的爹）

// 实例
const instance = new Object();

// 原型
const prototype = Object.prototype;

// 实例的_proto_ === 原型 
console.log(Object.prototype === instance.__proto__);

//原型的 constructor  === 构造函数

console.log(prototype.constructor === Object);



// 列举一个例子: es5继承
// 构造函数
function Fly(name, age) {
    this.name = name;
    this.age = age;
}
// 构造函数的原型
Fly.prototype = {
    add: function() {
        console.log('this is a Add');
    },
    sex: "ll"
};

// new 一个实例
const fly = new Fly('hss', 26);
console.dir(fly);
fly.add();
console.log(fly.__proto__ === Fly.prototype)

// 再加一个构造函数，让Paly继承Fly的方法
function Paly(name) {
    this.name = name;
}

Paly.prototype = new Fly();
Paly.prototype.sex = 'jj';
let mifeng = new Paly();
mifeng.add();
console.log(mifeng.sex)