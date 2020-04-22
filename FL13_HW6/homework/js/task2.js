let word = prompt('Input a word!', 'word');
let ifEven = 2;
let middle = 2;
let oneLetter = 1;
let twoLetters = 2;
let position;
let wordLength;
if( word.length % ifEven === 0 ) {
    position = word.length / middle - oneLetter;
    wordLength = twoLetters;
} else {
    position = word.length / middle;
    wordLength = oneLetter;
}
if( word === '' || /^\s+$/.test(word)) {
    alert('Invalid value');
} else {
    alert(word.substring(position, position + wordLength));
}