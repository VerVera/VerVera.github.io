/**
 * Created by koste on 24.05.2016.
 */
//TEMPLATE

(function () {
    var cache = {};

    window.tmpl = function tmpl(str, data) {
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

var el1 = $('.wrapper');
var el2 = tmpl("template", quizLocal);
el1.html(el2);

function checkAnswers() {

    //1. input c ok и не отмеченый = 0
    if ($('input[data-value]:not(:checked)').length == 0 &&
            //2. input без ок отмеченй = 0
        $('input:checked:not(input[data-value])').length == 0 &&
            //3. input c ok и отмеченый > 0
        $('input[data-value]:checked').length > 0) {
        return true
    }

    return false;
}

$(function () {
    $('#result_button').on('click', (function () {
        var result = $('#popup_name p');
        if (checkAnswers()) {
            result.html('Верно! Вы любите кошек!');
        } else {
            result.html('Вы не прошли тест!')
        }

        $('#popup_name').show(500);

    }));
    $('.popup_button').click(function () {
        $('input:checked').attr("checked", false);
        $('#popup_name').hide(1000);
    });
});

