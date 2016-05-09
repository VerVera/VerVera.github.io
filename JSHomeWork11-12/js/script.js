$(document).ready(function () {

    $('#my-carousel').carousel({width: '255', height:'500'});

});
(function () {
    var cache = {};

    this.tmpl = function tmpl(str, data) {
        // Выяснить, мы получаем шаблон или нам нужно его загрузить
        // обязательно закешировать результат
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
                tmpl(document.getElementById(str).innerHTML) :

            // Сгенерировать (и закешировать) функцию,
            // которая будет служить генератором шаблонов
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                    // Сделать данные доступными локально при помощи with(){}
                "with(obj){p.push('" +

                    // Превратить шаблон в чистый JavaScript
                str
                    .replace(/[\r\t\n]/g, " ")
                    .split("<%").join("\t")
                    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                    .replace(/\t=(.*?)%>/g, "',$1,'")
                    .split("\t").join("');")
                    .split("%>").join("p.push('")
                    .split("\r").join("\\'")
                + "');}return p.join('');");

        // простейший карринг(термин функ. прог. - прим. пер.)
        // для пользователя
        return data ? fn(data) : fn;
    };
})();

//в them_name можно передать другую тему "light"
var data = {
    theme_name: "dark",
    text : "Советы от гуру - Суши, по написанию быстрого и качественного кода JS!",
    image:[{url:"./img/1.jpg",description:"1. Поймать ДЗЭН кода, сложив правильно лапы и прищурив глаза."},
        {url:"./img/2.jpg",description:"2. Прилечь в спокойной обстановке и обдумать алгоритм."},
        {url:"./img/3.jpg",description:"3. Не можете начать? Присядьте на клавиатуру, погрейтесь."},
        {url:"./img/4.jpg",description:"4. Примите солнечные ванны и вы поймете, что гововы приступить!"}]};


var el1 = document.body;
el1.innerHTML = tmpl("template", data);
