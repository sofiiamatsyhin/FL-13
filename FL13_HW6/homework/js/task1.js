let check = prompt('What is your check number?', 0);
    check = parseInt(check);
let tip = prompt('What is tip percentage?', 0);
let maxPercent = 100;
let round = 100;
let amount = check * parseInt(tip) / maxPercent;
let sum = check + amount;
    check = Math.round(check * round) /round;
    tip = Math.round(parseInt(tip) * round) /round;
    amount = Math.round(amount * round) /round;
    sum = Math.round(sum * round) /round;
if( check === null || tip === null || isNaN(check) || isNaN(tip) || check < 0 || tip < 0 || tip > maxPercent ) {
    alert('Invalid input data');
} else { 
    alert('Check number: ' + check + '\nTip: ' + tip + '%' + '\nTip amount: ' + amount + '\nTotal sum to pay: ' + sum);
}