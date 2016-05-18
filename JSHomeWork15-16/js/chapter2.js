/**
 * Created by koste on 18.05.2016.
 */

var Human = {
    name: 'Vera',
    age: 34,
    sex: 'female',
    weight: 47,
    growth: 162
};

var Worker = {
    job: 'Google',
    salary: '5000$',
    work: function () {
      return true;
    },
    __proto__: Human
};
var Student = {
    place_of_study: 'GoForIT',
    grants: '0$',
    watch_tv_shows: function () {
      return true;
    },
    __proto__: Human
};

var student1 = Object.create(Student);
student1.name = 'Петя';
console.log(student1.name, student1.watch_tv_shows());


var student2 = Object.create(Student);
console.log(student2.name, student2.watch_tv_shows());


var worker1 = Object.create(Worker);
worker1.salary = '100$';
console.log(worker1.salary, worker1.work());


var worker2 = Object.create(Worker);
console.log(worker2.salary, worker1.work());