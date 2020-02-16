
let userScore = 0,
    botScore = 0,
    result,
    bot,
    user,
    tracker;

function computerPlay() {
    // function to generate computers(bot) choice 
    const random = Math.random() * 3;
    return random < 1 ? 'Rock' : random < 2 ? 'Paper' : 'Scissor';
}

function playRound() {
    bot = computerPlay().toLowerCase();
    user = (this.className).toLowerCase();

    if (user === bot)
        result = 'draw';

    // Rock scenarios
    if (user === 'rock' && bot === 'paper')
        result = 'lose';
    if (user === 'rock' && bot === 'scissor')
        result = 'win';

    // Paper scenarios
    if (user === 'paper' && bot === 'scissor')
        result = 'lose';
    if (user === 'paper' && bot === 'rock')
        result = 'win';

    // Scissor scenarios
    if (user === 'scissor' && bot === 'rock')
        result = 'lose';
    if (user === 'scissor' && bot === 'paper')
        result = 'win';

    roundReferee();
}

function reset() {
    let choice = prompt('Are you sure ? Y / N ');
    if (choice.toLowerCase() === 'y') {
        userScore = 0;
        botScore = 0;
        p1.textContent = `User: ${userScore}`;
        p2.textContent = `Bot: ${botScore}`;
        p3.textContent = '';
    }
    else if (choice.toLowerCase() === 'n') return;
    else alert('Wrong input try again!');
}

function roundReferee() {
    if (result === 'win') {
        userScore += 1;
        tracker = 'You Win!!!';
    }
    else {
        userScore += 1;
        botScore += 1;
        tracker = 'Draw'
    }

    p1.textContent = `You: ${userScore}`;
    p2.textContent = `Bot: ${botScore}`;
    p3.textContent = `${tracker}`;
}

let resetGame = document.querySelector('#reset-button');
resetGame.addEventListener('click', reset);

let selection = Array.from(document.querySelectorAll('#button'));
selection.forEach(button => button.addEventListener('click', playRound));

let div = document.querySelector('#result');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
