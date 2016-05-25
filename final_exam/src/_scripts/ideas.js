$(function () {
    if ($("html").hasClass("ie8")) {
        return
    }
    
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

});
