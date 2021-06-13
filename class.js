class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "My School";
    }
}

const student1 = new Student(22, 'Maya');
const student2 = new Student(25, 'Safa');
const student3 = new Student(30, 'Abir');
console.log(student1, student2, student3);
console.log(student1.name, student2.name, student3.name);
