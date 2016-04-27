$(function() {
    $('input').mouseover(function(){
        $(this).parents('.form-group').find('p').show('slow');
    }).mouseout(function(){
        $(this).parents('.form-group').find('p').hide('slow');
    });
    $('button').click(function(){
        $('div p').show();
    });
    $('ul').on('click', 'li', (function(){
        var n = $('ul li').index(this) + 1;
        console.log(n);
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('#tab' + n).addClass('in active');
        console.log('#tab' + n);
    }));
});
