// 1.值类型 改变栈区
// let num1 = 20;
// let num2 = num1;
// num1 += 10;
// console.log(num1);//30
// console.log(num2);//20


// 2.引入 改变堆区
// let obj1 = {}; //指向同一个地址
// let obj2 = obj1; //指向同一个地址
// obj2.name = "111";
// console.log(obj1);//{ name: '111' }
// console.log(obj2);//{ name: '111' }

//3. 同上 堆区
// let md =  new Object();
// md.exp = new Object({name:'小黄'});
// let exp = md.exp;
// exp.name = "早饭打";
// console.log(md.exp);
// console.log(exp);


let person = require('./10-person');
let p = new person("张三", 12, "男");
console.log(p);//{ name: '张三', age: 12, sex: '男' }
p.eat();//张三在吃饭