"use strict";
var btnStart = document.getElementById('btn-start');
var btnReset = document.getElementById('btn-reset');
var coinBox = document.getElementById('coin');
btnStart.addEventListener('click', function (e) {
    e.preventDefault();
    var currenClass = '';
    var headsOrTails = Math.floor(Math.random() * 2);
    if (headsOrTails === 0) {
        coinBox.className = 'tails';
        currenClass = 'tails';
        console.log(coinBox.className);
    }
    if (headsOrTails === 1) {
        coinBox.className = 'heads';
        currenClass = 'heads';
        console.log(coinBox.className);
    }
    setTimeout(function () {
        coinBox.classList.remove(currenClass);
    }, 5000);
});
btnReset.addEventListener('click', function () {
    coinBox.className = '';
});
