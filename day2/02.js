// 1.引入模块
let fs = require('fs');

// 2.打开文件
// fs.openSync(path, [flags, mode])
let fd = fs.openSync('openSync.txt', 'w');
console.log(fd);

// 3.写入内容
// fs.writeFileSync(file,内容)
fs.writeFileSync(fd,"今天天气很好");

// 4.保存并退出
fs.closeSync(fd);