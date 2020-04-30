function letterCount(text, word) {
    [text, word] = [text, word].map(low => low.toLowerCase());
    let x = 0;
    let y = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === word[0]) {
            for(let m = i; m < i + word.length; m++) {
                if(text[m] === word[m-i]) {
                    y++;
                }
                if (y === word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return x;
}
letterCount();