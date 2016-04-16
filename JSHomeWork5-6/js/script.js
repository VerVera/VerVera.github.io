var isStart = false;
var timer = 0;
var start;

var h1 = document.getElementById('t1');
var h3 = document.getElementById('t2');

function startTime() {
    if (isStart === true) {
        button_start.innerHTML = 'START';
        button_start.className = 'btn btn-primary';
        isStart = false;
    } else {
        start = new Date;
        button_start.innerHTML = 'PAUSE';
        button_start.className = 'btn btn-success';
        isStart = true;
    }
}
function display() {
    var time = new Date(timer);
    h1.innerHTML = time.toUTCString().substr(17, 8);
    h3.innerHTML = prefInt(time.getMilliseconds(),3);

}
function calcTime() {
    if (isStart) {
        var end = new Date;
        timer = timer + (end - start);
        display();
    }
};
function clearInterval() {
    timer = 0;
    display();
}
function prefInt(number, len) {
    return (new Array(len).join('0') + number).slice(-len);
}

setInterval(calcTime, 100);
var button_start = document.getElementById('button_start');
button_start.addEventListener('click', startTime);

var button_clear = document.getElementById('button_clear');
button_clear.addEventListener('click', clearInterval);