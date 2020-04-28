let message = confirm('Do you want to play a game?');
let defaultPrize = 100;
let maxNum = 5;
let money = 0;
let ourPrize = 1;
let prize = 100;
let attempt;
let guess;
let random;
let win;

const DEFAULT_NUM = 5;
const DEFAULT_ATTEMPT = 3;
const DOUBLE = 2;
const FIRST_ROUND_PRIZE = 100;

if (message) {
    while(message) {
        prize *= ourPrize;
        random = Math.floor(Math.random() * (maxNum + 1));
        markLoop:
        for(attempt = DEFAULT_ATTEMPT; attempt > 0; --attempt) {
            guess = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNum}
Attempts left: ${attempt}
Total prize: ${money}$
Possible prize on current attempt: ${prize}$`));
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
                prize /= DOUBLE;
            }
        }
        if (message && guess === random) {
                maxNum += DEFAULT_NUM;
                defaultPrize *= DOUBLE;
                prize = defaultPrize;
            } else {
                alert(`Thank you for your participation. Your prize is: ${money}$`);
                message = confirm('Do you want to play again?');
                if (message) {
                    ourPrize = 1;
                    prize = FIRST_ROUND_PRIZE;
                    maxNum = DEFAULT_NUM;
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
                maxNum = DEFAULT_NUM;
                money = 0;
                prize = FIRST_ROUND_PRIZE;
            }
        }
    } else {
        alert('You did not become a billionaire, but can.')
}