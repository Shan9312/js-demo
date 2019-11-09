//  es5继承
/**
 * 方法一：原型链继承 ，让构造函数的原型直接指向另一个构造函数，实现继承
 *  缺点，同一个原型链上，更改一个属性，其他得继承改属性的值也随着改变
 * */
function Fly(name, age) {
    this.name = name;
    this.age = age;
}
Fly.prototype = {
    add: function() {
        console.log('this is a Add');
    },
    sex: "ll"
};

function Paly(name) {
    this.name = name;
}
Paly.prototype = new Fly();
Paly.prototype.sex = 'hss';
let mifeng = new Paly();
mifeng.add();
console.log(mifeng.sex)

/**
 * 方法二：call,spline,bind 构建函数绑定this，实现继承
 * 缺点： 构造函数的父类原型上的方法拿不到，无法使用
 * */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    sayHellow: function() {
        console.log(this.name + '你好')
    },
}

function Child(sex, name, age) {
    this.sex = sex;
    Person.call(this, name, age)
}

let p = new Child('nv', 'hss', 26);
console.dir(p);
// p.sayHellow();// 会报错。无法使用父类方法

/**
 * 方法三：原型继承 & 构造函数继承 结合
 * 
 * */
function P(name, age) {
    this.name = name;
    this.age = age;
}
P.prototype = {
    sayHello() {
        console.log(this.name + '今年年龄是' + this.age)
    }
}

function B(name, age) {
    P.call(this, name, age);
}
B.prototype = new P();
B.prototype.constructor = B; // 构造函数指向自己

let c = new B('hll', 26);
c.sayHello();

/**
 * ES6
 * Class 继承
 * */

class Home {
    constructor(address, area) {
        this.address = address;
        this.area = area;
    }
    sayHello() {
        console.log(this.address + '属与' + this.area);
    }
}

let h = new Home('三林新村', '浦东新区')
h.sayHello();

class L extends Home {
    constructor(address, area) {
        super(address, area);
    }
    handleRead() {
        console.log('你家的小区地址：' + this.address + this.area);
        super.sayHello();
    }
}

let l = new L('永泰路', '浦东新区');
l.handleRead();