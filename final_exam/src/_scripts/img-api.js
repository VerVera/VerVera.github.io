$(function () {
    $.ajaxSetup({
        cache: false
    });
    $.support.cors = true;
    
    function getImg(s) {

        $.get('http://api.pixplorer.co.uk/image?&amount=7&size=tb', {
            'word': s,
            r: +Math.random()
        }, function (data) {
            if (data.status == "success" && data.count > 0) {
                for (var i = 0; i < data.count; i++) {
                    $('.ideas__item--' + (i + 1)).find('img').attr('src', data.images[i].imageurl)
                }
            }
        }, 'json');
    }

    getImg('');

    $('.search button').click(function (e) {
        var s = $('#searchInput').val();
        if (s) {
            getImg(s)
        }

    })
});