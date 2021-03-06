(function ($) {
    $(function () {
        $('.carousel__photo').jcarousel();

        $('.carousel__pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('carousel__pagination--active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('carousel__pagination--active');
            })
            .jcarouselPagination();
    });

    $(".mainRight__button").click(function () {
            $(this).toggleClass("mainRight__button--active");
            $(this).next().toggleClass("mainRight__panel--show");
        }
    );

})(jQuery);