const btnStart = document.getElementById('btn-start') as HTMLButtonElement;
const btnReset = document.getElementById('btn-reset') as HTMLButtonElement;
let coinBox = document.getElementById('coin') as HTMLDivElement;

btnStart.addEventListener('click', (e) => {
    e.preventDefault();

    let headsOrTails = Math.floor(Math.random() * 2);
    
    if(headsOrTails === 0) {
        coinBox.className = 'tails';
        console.log(coinBox.className)
    }

    if(headsOrTails === 1) {
        coinBox.className = 'heads';
        console.log(coinBox.className)
    }
})

btnReset.addEventListener('click', () => {
    coinBox.className = '';
})