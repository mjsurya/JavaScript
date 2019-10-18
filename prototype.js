let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;

};
  EmpDetails.prototype.getName = function(){
    return this.name;
};

EmpDetails.prototype.getAge = function(){
    return this.age;
};
let Emp1 = new EmpDetails('John', 30);
let Emp2 = new EmpDetails('Tom', 40);

console.log(Emp1.getName());
console.log(Emp2.getAge());
