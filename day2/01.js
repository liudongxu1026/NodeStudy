// let buffer = new Buffer(10);
// console.log(buffer);

// 1.将字符串转为二进制
let str = '一二三四';
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.toString());

// 2.Buffer.alloc(size[, fill[, encoding]])
/*
     初始化： 确定的长度
*/
// let buffer2 = Buffer.alloc(10);
// buffer2[0] = 10;
// buffer2[1] = 11;
// buffer2[2] = 12;
// console.log(buffer2);
