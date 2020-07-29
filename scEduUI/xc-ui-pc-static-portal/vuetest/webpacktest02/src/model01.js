// 定义add函数
function  add(x, y) {
    debugger;
    return Number.parseInt(x) + Number.parseInt(y);
}

// 导出add方法
module.exports.addition = add;
// module.exports ={add,add2};//如果有多个方法这样导出