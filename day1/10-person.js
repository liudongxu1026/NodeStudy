function person (name, age, sex){
    this.name  = name;
    this.age = age;
    this.sex = sex;
};

person.prototype = {
    eat: function (){
        console.log(`${this.name}在吃饭`);
    }
};

module.exports = person;
