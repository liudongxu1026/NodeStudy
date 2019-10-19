// 1.引入模块
let fs = require('fs');
// 2.创建 读入流.
let rs = fs.createReadStream('H:/杂七杂八/太难了.mp4');
let ws = fs.createWriteStream('./video/stream-我太难了.mp4');
// 3.创建管道
rs.pipe(ws);