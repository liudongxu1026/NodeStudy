// 1.引入模块
let fs = require('fs');

// 2.打开文件
fs.open('open.txt', 'a', (err, fd)=>{
    // 2.1 判断是否出错
    if(!err){
        // 2.2 写入
        fs.writeFile(fd, '异步写入', (err)=>{
            // 2.2.1 写入成功
            if(!err){
                console.log('写入成功');
            }else{
                throw err;
            }
        });
        // 2.3 关闭
        fs.close(fd, (err)=>{
            if(!err){
                console.log('关闭成功');
            }else{
                throw err;
            }
        })
    }else {
        throw err;
    }
});

console.log('123')