let arrayLike = "haosss";
let arr2 = Array.from(arrayLike);

console.log(arr2); // [ 'h', 'a', 'o', 's', 's', 's' ]

let obj = {
    name: "hss",
    age: 28,
    sex: "nv",
};

const { sex } = obj;
const { age, ...b } = obj;
console.log(b);

// Promise.resolve()
//     .then(() => {
//         console.log("then1");
//         Promise.resolve()
//             .then(() => {
//                 console.log("then1-1");
//                 return 1;
//             })
//             .then(() => {
//                 console.log("then1-2");
//             });
//     })
//     .then(() => {
//         console.log("then2");
//     })
//     .then(() => {
//         console.log("then3");
//     })
//     .then(() => {
//         console.log("then4");
//     });

var readBinaryWatch = function(num) {
    const res = [];
    const getCount = (n) => {
        let count = 0;
        while (n !== 0) {
            count++;
            n = n & (n - 1);
        }
        return count++;
    };
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (getCount(i) + getCount(j) === num) {
                res.push(`${i}:${j < 10 ? "0" + String(j) : j}`);
            }
        }
    }
    return res;
};
readBinaryWatch(2);