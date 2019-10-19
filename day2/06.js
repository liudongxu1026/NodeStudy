// 1.引入模块
let fs = require('fs');
// 2.创建 读入流.
let rs = fs.createReadStream('H:/杂七杂八/太难了.mp4');
let ws = fs.createWriteStream('./video/stream-我太难了.mp4');
//3.监听流打开和关闭
rs.once('open',()=>{
    console.log('读流通道已经打开');
});
rs.once('close',()=>{
    console.log('读流通道已经关闭');
});

ws.once('open',()=>{
    console.log('写流通道已经打开');
});
ws.once('close',()=>{
    console.log('写流通道已经关闭');
});
//4.绑定 data
rs.on('data', (data)=>{
    // 打印出的 data 是一段一段的 buffer
    // console.log(data);
    // 最后 node.js 会做一个整合拼接 变成一整个 文件
    // 然后写入 如果此处不写入的话 只有一个 空壳文件名
    ws.write(data)
});