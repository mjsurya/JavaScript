function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    monthlyBonus = 1000;

    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus
        console.log('Final Salary is ' +finalSalary);
    }

    this.getEmpDetails = function(){
        console.log('Name: '+this.name+' | Age : '+this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('John', 37, 7000);
emp1.getEmpDetails();
