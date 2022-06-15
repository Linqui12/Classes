'use strict'

class User {
    constructor(name, surname) { this.name = name, this.surname = surname };
    get fullName() {
        return this.name + ' ' + this.surname;
    }

};
/**
 * @param {Date} year
 */
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    validateData(year) {
        const temp = new Date().getFullYear();
       const lim= temp-5;
        if (year <= temp|| year >= lim) {
            return true;
        }
       
    }
    set year(year) {
        if (!this.validateData(year)) {

             throw new RangeError('Incorrect date')
        }
        this.year = year;  
    }
    get year(){
        return this.year;
    }

    showName() {
        return console.log(super.fullName);
    }
    getCourse() {
        const res= new Date();
        return res.getFullYear() - this.year;
    }
}


let b = new Student('Nick', 'Nosk', 2019);
let c = new Student('Peter', 'Parker', 2008);
let d = new Student('Otto', 'Octavius', 2017);
let e = new Student('Ni', 'Li', 2025);


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

group.pushStudent();
group.pushStudent();
group.pushStudent();
group.pushStudent();
group.showStudents();