$(function() {
    $('input').mouseover(function(){
        $(this).parents('.form-group').find('p').show('slow');
    }).mouseout(function(){
        $(this).parents('.form-group').find('p').hide('slow');
    });
    $('button').click(function(){
        $('div p').show();
    })
});
