// function myCall(context, ...args) {
//     if (!context) {
//         throw new Error('context is require')
//     }
//     context.fn = this
//     const res = context.fn(...args)
//     delete context.fn
//     return res
// }
// Function.prototype.myCall = myCall;
// const test = ({}).toString.myCall([], 1212, 123, 3123, 555)
// console.log(test)

// var obj = { 0: 1, length: 1 };
// [].forEach.myCall(obj, (item, index) => {
//     console.log(item, index);
// })


// // var name = 456;
// // var obj = {
// //     name: 123,
// //     getName: function() {
// //         console.log(this.name)
// //     }
// // }
// // obj.getName()
// // var test = obj.getName;
// // test()


// apply, ===  {}.toString.apply([])   
Function.prototype.myApply = function(context, arg) {
    context.fn = this;
    const res = context.fn(...arg);
    delete context.fn;
    return res;
}

console.log(({}).toString.myApply([], [12, 22]));