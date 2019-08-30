/**
 * let & const: 只能当前使用定义的变量，*有块级作用域*
 * var: 变量会声明提前
 * */
function test() {
  console.log(name);
  console.log(age);
  var name = 'shan';
  let age = 12;
}
// test();

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i) // 3 3  3
  })
}


for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i) // 0 1 2
  })
}