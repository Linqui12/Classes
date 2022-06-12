'use strict'
class User {
    constructor(name, surname) { this.name = name, this.surname = surname };
    logName() {
        console.log(this.name + ' ' + this.surname);
    }
    validateData(year) {
        let temp = new Date();
        if (year > temp.getFullYear()) {
            return temp.getFullYear();
        }
        else return year;
    }
};
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = super.validateData(year);
    }
    setYear(year) { this.year = this.validateData(year) }
    logName(){
        super.logName()+console.log(this.getCourse());
    }
    getCourse() {
        let res = new Date();
        if (res.getFullYear() - this.year > 5) return 'Finish';
        else return res.getFullYear() - this.year;
    }
}

let a = new Student('Mark', "marmoz", 2027);
let b = new Student('Nick', "Nosk", 2012);
let c = new Student('Peter', "Parker", 2015);
let d = new Student('Otto', "Octavius", 2017);
let e = new Student('Ni', "Li", 2019);
e.logName();

class Group {
    constructor(name){this.name=name,this.students=new Array()};
    pushStudent(student){this.students.push(student)};

    logGroup(){this.students.forEach(element =>element.logName())};        
    
        
    
};
let group=new Group('Fm');
group.pushStudent(a);
group.pushStudent(b);
group.pushStudent(c);
group.pushStudent(d);
group.pushStudent(e);
group.logGroup();