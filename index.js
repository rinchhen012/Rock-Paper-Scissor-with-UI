
function computerPlay() {
    // function to generate computers(bot) choice 
    const random = Math.random() * 3;
    return random < 1 ? 'Rock' : random < 2 ? 'Paper' : 'Scissor';
}

function playRound() {
    let bot = computerPlay().toLowerCase();

    let user = prompt('Type any one (Rock/Paper/Scissor)').toLowerCase().trim();

    if (user === bot)
        return 'Draw';

    // Rock scenarios
    if (user === 'rock' && bot === 'paper')
        return 'You Lose';
    if (user === 'rock' && bot === 'scissor')
        return 'You Win';

    // Paper scenarios
    if (user === 'paper' && bot === 'scissor')
        return 'You Lose';
    if (user === 'paper' && bot === 'rock')
        return 'You Win';

    // Scissor scenarios
    if (user === 'scissor' && bot === 'rock')
        return 'You Lose';
    if (user === 'scissor' && bot === 'paper')
        return 'You Win';
}



