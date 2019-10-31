/**
 *  1. es5的构造函数 创建对象
 *  a.使用构造函数 创建一个 对象的模版 b. 利用构造函数的prototype指向原型，在原型上创建公用的方法
 *  c.new 一个实力对象 _proto_ 指向原型
 * */
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '构造函数' + this.x + this.y;
}

var line = new Point('line', '原型');
console.log(line.toString());
// new的实例对象的（双下划线__proto__） 和 构造函数Point指向的对象是同一个
console.log(line.__proto__ == Point.prototype); //true; 
console.log(line.__proto__.constractor == Point.prototype.constractor) // true;

/**
 * 2. Class 类，es5的语法糖
 *  把上面例子class 的写法
 * */

class Points {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return 'Class-构造函数' + this.x + this.y;
  }
}
const A = new Points('class', '类');
console.log(A.toString());
// 使用class 创建的 对象，改对象的构造函数 和 实例的 构造函数 是 相同的
console.log(Points.constractor == A.__proto__.constractor);

/**
 * 3. class的get set用法
 * 
 * */

class Sum {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get() {
    return this.a;
  }

  set(val) {
    return this.a = val;
  }
  sum() {
    this.a++;
    this.b--;
    console.log(this.a, this.b);
  }

}

const AA = new Sum(8, 2);
console.log(AA.sum()); // 9 1

/**
 * 3. class的 static 静态属性 &  公用方法 & 私有方法_
 * 
 * */

class Publics {
  sayHi() {
    console.log('this is public way');
  }

  mySay() {
    console.log('this is my privite way');
  }
}

const myPublic = new Publics();
console.log(myPublic.sayHi());
console.log(myPublic._mySay());