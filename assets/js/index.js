'use strict'

class User {
    constructor(name, surname) { this.name = name, this.surname = surname };
    get fullName() {
        return this.name + ' ' + this.surname;
    }

};
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    validateData(year) {
        let temp = new Date();
        temp=temp.getFullYear();
        if (year <= this.temp|| year >= (this.temp - 5)) {
            return true;
        }
       
    }
    set year(year) {
        if (this.validateData(year)) {

            this.year = year;
        }
        //else  throw new RangeError('Incorrect date')
    }


    showName() {
        return super.fullName;
    }
    getCourse() {
        let res= new Date();
        return res.getFullYear() - this.year;
    }
}


let b = new Student('Nick', "Nosk", 2019);
let c = new Student('Peter', "Parker", 2018);
let d = new Student('Otto', "Octavius", 2017);
let e = new Student('Ni', "Li", 2020);
a.showName();

class Group {
    constructor(name) { this.name = name, this.students = new Array() };
    pushStudent(student) { this.students.push(student) };
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set students(students) {
        this._students = students;
    }
    get students() {
        return this._students;
    }
    showStudents() {
        this._students.forEach(s => console.log(s.showName()));
    };
};
let group = new Group('Fm');
group.pushStudent(a);
group.pushStudent(b);
group.pushStudent(c);
group.pushStudent(d);
group.pushStudent(e);
group.showStudents();