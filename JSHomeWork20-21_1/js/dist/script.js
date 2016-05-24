"use strict";

var app = {
    pow: function pow(number, degree) {
        var result = 1;
        for (var i = 0; i < degree; i++) {
            result = result * number;
        }
        return result;
    },
    isInteger: function isInteger(num) {
        return (num ^ 0) === +num;
    } };
try {
    var number = prompt("Введите число", '');
    var degree = prompt("Введите степень", '');
} catch (e) {}

if (!app.isInteger(number)) {
    try {
        alert('Число ' + number + ' не поддерживается, введите целое число');
    } catch (e) {}
} else {
    if (!app.isInteger(degree) || degree < 0) {
        try {
            alert('Число ' + degree + ' не поддерживается, введите целое число');
        } catch (e) {}
    } else {
        var res = app.pow(number, degree);
        console.log(res);
    }
}

try {
    module.exports = app;
} catch (e) {}
