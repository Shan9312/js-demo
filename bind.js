var obj = {
    name: '111'
}

var obj2 = {
        name: '2222'
    }
    // this runTime !
var getName = function() {
        return this.name
    }.bind(obj)
    // console.log(getName())