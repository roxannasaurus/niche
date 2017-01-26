/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    
    var bg_codes = ['#9b59b4', '#e74b3c', '#3597d9', '#16bb9b', '#e57d24'];
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function you_style(bg_codes) {
        var index = getRandomInt(0, bg_codes.length - 1);
        document.getElementById("bg").style.backgroundColor = bg_codes[index];
    }
    
    window.onload = function () {
        you_style(bg_codes);
    };
});