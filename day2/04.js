//1.引入模块
let fs = require('fs');
//2.创建写入流
let ws = fs.createWriteStream('test.txt');
//3.打开通道 - 关闭通道
ws.once('open', ()=>{
    console.log('通道已经打开')
});
ws.once('close', ()=>{
    console.log('通道已经关闭')
})
// 4.写入内容
ws.write('春眠不觉晓，');
ws.write('处处闻啼鸟。');
ws.write('夜来风雨声，');
ws.write('花落知多少。');
//5.关闭通道
ws.end();
