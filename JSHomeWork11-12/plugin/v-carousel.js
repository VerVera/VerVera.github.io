(function ($) {
    // значение по умолчанию
    var defaults = {left: '#arrow-left', right: '#arrow-right', width:'400', height:'600'};


    $.fn.carousel = function (params) {

        // при многократном вызове функции настройки будут сохранятся, и замещаться при необходимости
        var options = $.extend({}, defaults, options, params);

        this.addClass('v-carousel');
        var leftUIEl = $(options.left);
        var rightUIEl = $(options.right);
        var elementsList = $(this.find('ul'));
        var elementsImg = $(this.find('img'));
        var elLI = this.find('ul li');
        elLI.width(options.width).height(options.height);
        this.width(options.width).height(options.height);
        elementsImg.width(options.width).height(options.height - this.find('p').height());

        var pixelsOffset = $(this).width() + parseInt(elLI.css('margin-right'));
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = -((elementsCount - 1) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function () {
            if (currentLeftValue < maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        });

        rightUIEl.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        });

        return this;
    }

}(jQuery));