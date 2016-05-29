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

        $.get('http://pixabay.com/api/', {
            'key':'2634395-4f65232da7da7981f8a40c72d',
            'q': s,
            'min_width':320,
            'per_page': 7,
            'page':1,
            r: +Math.random()
        }, function (data) {
            if (data.hits && data.total > 0) {

                $('.ideas__item').each(function (i, item) {
                    $(item).find('img').attr('src', data.hits[i].webformatURL);
                    $(item).find('figcaption').text(data.hits[i].tags);
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

'use strict';
//IE 8 fixes
document.createElement('main');
document.createElement('section');
document.createElement('nav');
document.createElement('header');
document.createElement('article');
document.createElement('figure');
document.createElement('figcaption');
document.createElement('footer');

$.ajaxSetup({
    cache: false
});
$.support.cors = true;

$(document).ready(function () {

    $('#carousel1').carousel({
        css: true,
        left: '.works__item--step1 .works__arrow--left',
        right: '.works__item--step1 .works__arrow--right',
        img:'div'
    });
    
    $('#carousel2').carousel({
        css: true,
        left: '.works__item--step2 .works__arrow--left2',
        right: '.works__item--step2 .works__arrow--right2',
        img:'div'
    });

    $('#carousel3').carousel({
        css: true,
        left: '.works__item--step3 .works__arrow--left',
        right: '.works__item--step3 .works__arrow--right',
        img:'div'
    });

});