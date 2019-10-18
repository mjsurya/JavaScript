class Car{
    setName(name){
        this.name = name;
    }
    StartEngine(){
        console.log('Engine for '+this.name+' has started');
    }
    StopEngine(){
        console.log('Engine for ' +this.name+ ' has stopped');
    }
}

class Toyota extends Car{

    topSpeed(speed){
        console.log('Top speed for ' +this.name+ ' is ' +speed);
    }
}

let myCar = new Toyota();
myCar.setName('Camry');
myCar.StartEngine();
myCar.StopEngine();
myCar.topSpeed(200)



