//求和
exports.sum = ((...numbers)=>{
    let result = 0;
    numbers.forEach((num)=>{
        result += num;
    });
    return result;
});
//平均数
exports.avg = ((...numbers)=>{
    let result = 0;
    numbers.forEach((num)=>{
        result += num;
    });
    return result / numbers.length;
});