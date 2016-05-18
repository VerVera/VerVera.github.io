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

$(document).ready(function () {

    function search(event) {

        var el1 = $('.wrapper');
        el1.empty();
        $('.not-found').hide();
        $.ajax({
            url: "https://www.googleapis.com/customsearch/v1?cx=012508802946070520693%3Az2opahfhb4c&key=AIzaSyDXEPsHJEPPaXVjPPKUD8WfA6GzwTDwr8k",
            data: {
                q: $('input').val()
            },
            success: function (data) {

                if (data.searchInformation.totalResults == 0) {
                    $('.not-found').show();
                    return
                }

                var el1 = $('.wrapper');
                var el2 = tmpl("template", data);
                el1.append(el2);
                console.log(data);
            }

        });

        return false;
    }

    $("#button").click(search);

    $("#button, input").keydown(function (event) {
        if (event.keyCode == 13) {

            return search(event);
        }
    });

});

