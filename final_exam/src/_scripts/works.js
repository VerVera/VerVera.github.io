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