/**
 * 1. 状态不会改变；pending 变为 fulfilled 和 pending 变为 rejected
 * 只要这两种情况发生，状态就凝固了，不会再变了
 * */
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   })
// }

// timeout(100).then((value) => {
//   console.log(value + '执行成功了');
// })

// console.log(timeout(100));

/**
 * 2. promise的面试题
 * 
 * */
function sleep(ms) {
    return new Promise(function() {
        setTimeout(function() {
            console.log(1111);
        }, ms)
    })
}
async function run() {
    await sleep(1000);
    console.log(222);
}
run();

/**
 * 3. promise 实现 ajax
 * 
 * */

// const getJson = function(url) {
//     const promise = new Promise(function(resolve, reject) {
//         const handler = function() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText))
//             }
//         };

//         const client = new XMLHttpRequest();
//         client.open('GET', url);
//         client.onreadystatechange = handler;
//         client.responseType = 'json';
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//     });
//     return promise;
// }

// getJson("/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
// }, function(error) {
//     console.error('出错了', error);
// });

/**
 * 4. promise 案例
 * 
 * */

// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         reject(new Error('fail'))
//     }, 3000)
// })

// const promise2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve(promise1)
//     }, 1000)
// })
// promise2.then(
//     result => console.log(result)
// ).catch(error => console.log(error))