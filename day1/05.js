// exports, require, module, __filename, __dirname,

// exports 该对象用来将函数内部的局部变量或局部函数暴露到外部
// require 用来引入外部的模块
// module  当前模块
// __filename 当前模块文件名
// __dirname 当前模块所属文件夹名称

// console.log(module);
// console.log(module.exports); //{}
// console.log(exports); //{}
// console.log(exports === module.exports); //true
// console.log(__filename);//D:\liudongxu\叶建华Node\day1\05.js
// console.log(__dirname);//D:\liudongxu\叶建华Node\day1

exports.str = '1111';
module.exports.str = '1112';