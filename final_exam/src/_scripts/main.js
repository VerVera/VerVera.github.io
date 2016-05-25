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
