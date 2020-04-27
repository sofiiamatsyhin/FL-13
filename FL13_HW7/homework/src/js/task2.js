let message = confirm('Do you want to play a game?');
let defaultNum = 5;
let defaultAttempt = 3;
let defaultPrize = 100;
let double = 2;
let firstRoundPrize = 100;
let maxNum = 5;
let money = 0;
let ourPrize = 1;
let prize = 100;
let attempt;
let guess;
let random;
let win;
if (message) {
    while(message) {
        prize *= ourPrize;
        random = Math.floor(Math.random() * (maxNum + 1));
        markLoop:
        for(attempt = defaultAttempt; attempt > 0; --attempt) {
            guess = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNum}
Attempts left: ${attempt}
Total prize: ${money}$
Possible prize on current attempt: ${prize}$`))
            if (guess === null) {
                alert(`Thank you for your participation. Your prize is: ${money}$`);
                message = confirm('Do you want to play again?');
                break markLoop;  
            }      
            if (guess === random) {
                money += prize;
                message = confirm(`Congratulation, you won!   Your prize is: ${money} $. Do you want to continue?`);
                break;
            } else {
                prize /= double;
            }
        }
        if (message && guess === random) {
                maxNum += defaultNum;
                defaultPrize *= double;
                prize = defaultPrize;
            } else {
                alert(`Thank you for your participation. Your prize is: ${money}$`);
                message = confirm('Do you want to play again?');
                if (message) {
                    ourPrize = 1;
                    prize = firstRoundPrize;
                    maxNum = defaultNum;
                    money = 0;
                } else if (message === null) {
                    alert(`Thank you for your participation. Your prize is: ${money}$`);
                    message = confirm('Do you want to play again?');
                } else {
                    alert('You did not become a billionaire, but can.');
                }
            }
        } 
        if (message === null && guess === random) {
            alert(`Thank you for your participation. Your prize is: ${money}$`);
            message = confirm('Do you want to play again?');
            if (message) {
                ourPrize = 1;
                maxNum = defaultNum;
                money = 0;
                prize = firstRoundPrize;
            }
        }
    } else {
        alert('You did not become a billionaire, but can.')
}