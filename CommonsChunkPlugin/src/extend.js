// 为Number的原型上添加一个扩展方法

Number.prototype.pad = function(size) {
    let res = this + '';
    while(res.length < size) {
        res = '0' + res
    }
    return res
}