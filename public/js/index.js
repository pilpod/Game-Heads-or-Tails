"use strict";
var btnStart = document.getElementById('btn-start');
var btnReset = document.getElementById('btn-reset');
var coinBox = document.getElementById('coin');
btnStart.addEventListener('click', function (e) {
    e.preventDefault();
    var headsOrTails = Math.floor(Math.random() * 2);
    if (headsOrTails === 0) {
        coinBox.className = 'tails';
        console.log(coinBox.className);
    }
    if (headsOrTails === 1) {
        coinBox.className = 'heads';
        console.log(coinBox.className);
    }
});
btnReset.addEventListener('click', function () {
    coinBox.className = '';
});
