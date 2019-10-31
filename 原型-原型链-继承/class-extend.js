/**
 * 1. class & extends
 * 
 * */
//ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this
class Personel {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return 'see me';
  }
}

class Shan extends Personel {
  constructor(name, age, color) {
    super(); // **重点** es6 继承父的构造函数 1. super === A.prototype.constructor.call(this) this 指向的是Shan,而不是Personel;  2. super只能在子类的构造函数
    this.color = color;
  }

  toString() {
    return this.color + super.sayHello();
  }
}

let cp = new Shan('lili', 28, 'red');
console.log(cp.toString()); // see me
console.log(cp instanceof Shan); // true