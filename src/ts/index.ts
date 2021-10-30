const btnStart = document.getElementById('btn-start') as HTMLButtonElement;
const btnReset = document.getElementById('btn-reset') as HTMLButtonElement;
let coinBox = document.getElementById('coin') as HTMLDivElement;

btnStart.addEventListener('click', (e) => {
    e.preventDefault();

    let currenClass:string = '';
    
    let headsOrTails = Math.floor(Math.random() * 2);
    
    if(headsOrTails === 0) {
        coinBox.className = 'tails';
        currenClass = 'tails';
        console.log(coinBox.className)
    }

    if(headsOrTails === 1) {
        coinBox.className = 'heads';
        currenClass = 'heads';
        console.log(coinBox.className)
    }

    setTimeout(() => {
        coinBox.classList.remove(currenClass);
    }, 5000);
})

btnReset.addEventListener('click', () => {
    coinBox.className = '';
})