// exports.str = "暴露字符串";
// exports.fn = ()=>{
//     console.log('暴露一个方法');
// };
/* exports.obj = {name: '暴露对象的 name', age: 1};*/

// exports = { //导出后 引入未 空对象 {}
//     str: "暴露字符串",
//     fn: ()=>{
//         console.log('暴露一个方法');
//     },
//     obj:{name: '暴露对象的 name', age: 1}
// };

module.exports = { //导出后 引入成功
    str: "暴露字符串",
    fn: ()=>{
        console.log('暴露一个方法');
    },
    obj:{name: '暴露对象的 name', age: 1}
};