// 1.引入模块
let fs = require('fs');
// 2.读取文件
/*
    err：错误
    data: 读取的文件内容
*/
// 2.1 读 txt 文件
// fs.readFile('test.txt',(err,data)=>{
//     if(err){
//         throw err;
//         return;
//     }
//     console.log(data)
//     console.log(data.toString())
// });
//
// 2.2 读 图片 文件
// fs.readFile('C:/Users/12780/Desktop/简历.jpg',(err,data)=>{
//     if(err){
//         throw err;
//         return;
//     }
//     //2.2.1 写入图片文件
//     console.log(data);
//     fs.writeFile('./img/one.jpg', data, (err)=>{
//         if(err){
//             throw err;
//             return;
//         }
//         console.log('写入成功')
//     })
// });

// 2.3 读 视频 文件
fs.readFile('H:/杂七杂八/太难了.mp4',(err,data)=>{
    if(err){
        throw err;
        return;
    }
    //2.2.1 写入图片文件
    console.log(data);
    fs.writeFile('./video/太难了.mp4', data, (err)=>{
        if(err){
            throw err;
            return;
        }
        console.log('写入成功')
    })
});