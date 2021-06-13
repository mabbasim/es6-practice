class Parent{
    constructor(){
        this.fatherName = "Abbu";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Maya");
const baby2 = new Child("Nitu");
console.log(baby.getFullName());
console.log(baby2);
