function pow(number, degree) {
    var result = 1;
    for (var i = 0; i < degree; i++) {
        result = result * number;
    }
    return result;
}

function isInteger(num) {
    return (num ^ 0) === +num;
}

var number = prompt("Введите число", '');
var degree = prompt("Введите степень", '');

if (!isInteger(number)) {
    alert('Число ' + number + ' не поддерживается, введите целое число');
} else {
    if (!isInteger(degree) || degree < 0) {
        alert('Число ' + degree + ' не поддерживается, введите целое число');
    } else {
        var res = pow(number, degree);
        console.log(res);
    }
}


