
var quiz = {
    title: 'Тест: любите ли вы кошек?!',
    questions: [
        {
            name: '№1. Почему кошка не может жевать большие куски пищи?',
            answer: 1,
            options: [
                'Кошке просто лень жевать',
                'Челюсти кошки не двигаются из стороны в сторону',
                'Не хочет запачкать шёрстку'
            ]
        },
        {
            name: '№2. Почему кошка может пролезть в любое отверстие размером с её голову?',
            answer: 2,
            options: [
                'Кошка очень гибкое животное',
                'В поисках вкусной еды, кошка способна на многое',
                'У нее нет ключицы'
            ]
        },
        {
            name: '№3. Почему кошки не любят сладкое?',
            answer: 0,
            options: [
                'У кошек нарушен ген, который ответственен за восприятие сладкого вкуса',
                'Кошки следят за своим весом',
                'Какое сладкое? Мясо давай!'
            ]
        }
    ]
};

localStorage.setItem('quiz', JSON.stringify(quiz));
var quizLocal = JSON.parse(localStorage.getItem('quiz'));


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

$( ()=> {
    $('#result_button').on('click', ()=> {
        let result;
        result = $('#popup_name p');
        if (checkAnswers()) {
            result.html('Верно! Вы любите кошек!');
        } else {
            result.html('Вы не прошли тест!')
        }

        $('#popup_name').show(500);

    });
    $('.popup_button').click( ()=> {
        $('input:checked').attr("checked", false);
        $('#popup_name').hide(1000);
    });
});

