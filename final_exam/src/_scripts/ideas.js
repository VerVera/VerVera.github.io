$(function () {
    if (!$("html").hasClass("ie8")) {
        var $grid = $('.ideas_grid');
        var w = $grid.width();
        console.log(w);
        $grid.masonry({
            // options
            itemSelector: '.ideas__item',
            //columnWidth: 320
            columnWidth: w / 3
        });

        $(window).resize(function () {
            var newW = $grid.width();
            if (newW == w) {
                return
            }
            var columnWidth = 300;
            if (newW >= 768) {
                columnWidth = newW / 3
            }

            $grid.masonry('option', {columnWidth: columnWidth});
            w = newW;


        });
    }

    function getImg(s) {

        $.get('http://api.pixplorer.co.uk/image', {
            'word': s,
            'amount': 7,
            size: 'M',
            r: +Math.random()
        }, function (data) {
            if (data.status == "success" && data.count > 0) {

                $('.ideas__item').each(function (i, item) {
                    $(item).find('img').attr('src', data.images[i].imageurl);
                    $(item).find('figcaption').text(data.images[i].word);
                    if (Math.round(Math.random())) {
                        $(item).toggleClass('ideas__item--big')
                    }
                });
                if (!$("html").hasClass("ie8")) {
                    var $grid = $('.ideas_grid');
                    $grid.masonry();
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
