//array
var allNames = [];

//filling the array names
for (var i = 0; i < 5; i++) {
    allNames.push (prompt ('Введите имена'));
}

//enter your username
var userName = prompt('Введите ваше имя');

//compare the names in the array
var mistake = false;
for (var k = 0; k < allNames.length; k++) {
    if (allNames[k] == userName) {
        mistake = false;
        break;
    } else {
        mistake = true;
    }
}

//access message
if (mistake == true) {
    alert('Ошибка! Вам в доступе отказано');
} else {
    alert(userName + ' ,вы успешно вошли');
}