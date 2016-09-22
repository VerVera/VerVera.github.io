var quiz = [
    {
        id: 1,
        first_name: 'f_a',
        price_USD: 10,
        price_UAH: 250
    },

    {
        id: 2,
        first_name: 'f_b',
        price_USD: 15,
        price_UAH: 250
    },
    {
        id: 3,
        first_name: 'f_c',
        price_USD: 20,
        price_UAH: 150
    },
    {
        id: 4,
        first_name: 'f_d',
        price_USD: 40,
        price_UAH: 500
    },
    {
        id: 5,
        first_name: 'f_f',
        price_USD: 10,
        price_UAH: 350
    },
    {
        id: 6,
        first_name: 'f_g',
        price_USD: 25,
        price_UAH: 150
    },

    {
        id: 7,
        first_name: 'f_k',
        price_USD: 30,
        price_UAH: 200
    },
    {
        id: 8,
        first_name: 'f_l',
        price_USD: 55,
        price_UAH: 380
    },
    {
        id: 9,
        first_name: 'f_m',
        price_USD: 65,
        price_UAH: 425
    },
    {
        id: 10,
        first_name: 'f_n',
        price_USD: 25,
        price_UAH: 300
    },
    {
        id: 11,
        first_name: 'f_o',
        price_USD: 20,
        price_UAH: 200
    },

    {
        id: 12,
        first_name: 'f_p',
        price_USD: 10,
        price_UAH: 125
    },
    {
        id: 13,
        first_name: 'f_r',
        price_USD: 15,
        price_UAH: 150
    },
    {
        id: 14,
        first_name: 'f_s',
        price_USD: 25,
        price_UAH: 300
    },
    {
        id: 15,
        first_name: 'f_t',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 16,
        first_name: 'f_e',
        price_USD: 10,
        price_UAH: 250
    },

    {
        id: 17,
        first_name: 'f_y',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 18,
        first_name: 'f_q',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 19,
        first_name: 'f_w',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 20,
        first_name: 'f_z',
        price_USD: 10,
        price_UAH: 250
    },

    {
        id: 21,
        first_name: 'f_x',
        price_USD: 15,
        price_UAH: 300
    },
    {
        id: 22,
        first_name: 'f_v',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 23,
        first_name: 'f_l',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 24,
        first_name: 'f_s',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 25,
        first_name: 'f_m',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 26,
        first_name: 'f_a',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 27,
        first_name: 'f_o',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 28,
        first_name: 'f_p',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 29,
        first_name: 'f_i',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 30,
        first_name: 'f_o',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 31,
        first_name: 'f_p',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 32,
        first_name: 'f_i',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 33,
        first_name: 'f_o',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 34,
        first_name: 'f_p',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 35,
        first_name: 'f_i',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 36,
        first_name: 'f_i',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 37,
        first_name: 'f_o',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 38,
        first_name: 'f_p',
        price_USD: 10,
        price_UAH: 250
    },
    {
        id: 39,
        first_name: 'f_i',
        price_USD: 10,
        price_UAH: 250
    }
];

function showTable(numberPage, recordPerPage) {
    var str = '';
    var start = numberPage * recordPerPage - recordPerPage;
    var end = numberPage * recordPerPage - 1;
    for (var i = start; i <= end && i < quiz.length && i >= 0; i++) {
        str += '<tr class="c1"><td style="border: 1px solid black;" border="1px">'
            + quiz[i].id + '</td><td style="border: 1px solid black;" border="1px">'
            + quiz[i].first_name + '</td><td style="border: 1px solid black;" border="1px">'
            + quiz[i].price_USD + '</td><td style="border: 1px solid black;" border="1px">'
            + quiz[i].price_UAH + '</td></tr>';
    }
    $('.c1').remove();
    $('#second').after(str);
};

function calcSum() {
    var usd = 0;
    var uah = 0;
    quiz.forEach(function (item) {
        usd += item.price_USD;
        uah += item.price_UAH;
    })

    $('#total_USD').text(usd);
    $('#total_UAH').text(uah);
}

$(function () {
    var recordPerPage = 10;
    var numberPage = 1;
    var add = {};

    showTable(numberPage, recordPerPage);

    calcSum();

    $('.page2').on('click', function (event) {
        event.preventDefault();
        if (numberPage >= Math.ceil(quiz.length / recordPerPage)) return
        numberPage++;
        showTable(numberPage, recordPerPage);
    });

    $('.page1').on('click', function (event) {
        event.preventDefault();
        if (numberPage <= 1) return
        numberPage--;
        showTable(numberPage, recordPerPage);
    });


    $('.btn_add').on('click', function (event) {
        $('.modal_window').find('#input1').val('');
        $('.modal_window').find('#input2').val('');
        $('.modal_window').find('#input3').val('');
        $('.modal_window').find('#input4').val('');
        $('.modal_window').fadeIn('slow');
    });

    $('.btn_ok').on('click', function () {
        $('.modal_window').fadeOut('slow');

        add.id = $('.modal_window').find('#input1').val();
        add.first_name = $('.modal_window').find('#input2').val();
        add.price_USD = +$('.modal_window').find('#input3').val();
        add.price_UAH = +$('.modal_window').find('#input4').val();

        quiz.push(add);
        numberPage = Math.ceil(quiz.length / recordPerPage);
        showTable(numberPage, recordPerPage);
        calcSum();
    });

    $('.btn_print').on('click', function () {
        showTable(numberPage, quiz.length);

        window.print();
    });
    $('.btn_excel').on('click', function () {
        showTable(numberPage, quiz.length);

        tableToExcel('headTable', 'dataTable', 'footerTable', 'Data')
    });
    $('.btn_pdf').on('click', function () {
        showTable(numberPage, quiz.length);

        window.print();
    });

});



