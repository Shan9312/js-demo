// 方法一
// var add = function(val) {
//     var X = 5;
//     X++;
//     val++;
//     console.log(val, X);
// }

// module.exports.add = add;

// 方法二
module.exports = {
    valid(val) {
        var isType = false;
        if (typeof(val) == 'string') {
            return isType = true;
        } else {
            return isType = false;
        }
    },
    add(val) {
        val++;
        return val;
    }
};