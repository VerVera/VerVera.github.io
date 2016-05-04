$(function () {

    //CAROUSEL
    $('#gallery').jqcarousel();

    //SELECT
    $('select').select2();

    //CHECKBOX
    $(".my_checkbox").mousedown(function () {
        changeCheck($(this));
    });
    //при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид
    $(".my_checkbox").each(function () {
        changeCheckStart($(this));

    });
    // функция смены вида и значения чекбокса el - span контейнер дял обычного чекбокса input - чекбокс

    function changeCheck(el) {
        var el = el,
            input = el.find('input').eq(0),
            checkDisabled = input.attr('disabled');
        if (checkDisabled) {
            return true
        }
        if (!input.attr('checked')) {
            el.css('background-position', '0 -17px');
            input.attr('checked', true)

        } else {
            el.css('background-position', '0 0');
            input.attr('checked', false)
        }
        return true;

    }

    //если установлен атрибут checked, меняем вид чекбокса
    function changeCheckStart(el) {
        var el = el,
            input = el.find('input').eq(0),
            checkDisabled = input.attr('disabled');
        if (input.attr('checked')) {
            el.css('background-position', '0 -17px');
        }

        if (checkDisabled) {
            el.addClass('my_checkboxDisabled');
            el.attr('disabled', 'disabled');
        }
        return true;
    }

//MENU
    $(function () {
        $('#nav li').hover(function () {
            $(this).children('ul').show().find('li').stop().animate({
                'opacity':1,
                'height':'50px'
            });
            /*$(this).children('ul').stop(false, true).fadeIn('slow');*/
            $(this).children('a').addClass('selected');

        }, function () {

            $(this).find('li').stop().animate({
                'opacity':0,
                'height':'0'
            });
            $(this).children('a').removeClass('selected');
        });
    });

});
