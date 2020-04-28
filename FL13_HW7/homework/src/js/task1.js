let login = prompt('Write your login', 'login');
let password;
let date = new Date();
const USER = {
    'User' : 'UserPass',
    'Admin' : 'RootPass'
};
const MIN_SYMBOL = 4;
const DAY_HOURS_FIRST = 8;
const DAT_HOURS_SECOND = 20;
if ( login === null || login ==='') {
    alert('Canceled')
} else if ( login.length < MIN_SYMBOL ) {
    alert(`I don't know any users having name length less than 4 symbols`)
} else if ( USER[login] ) {
    password = prompt('Write your password', 'password');
    if ( password === null || password === '') {
        alert('Canceled')
    } else if ( login === 'User' && password === 'UserPass' ) {
        if ( DAY_HOURS_FIRST < date.getHours() && DAT_HOURS_SECOND > date.getHours() ) {
            alert('Good day, dear User!')
        } else {
            alert('Good evening, dear User!')
        }
    } else if ( login === 'Admin' && password === 'RootPass') {
        if( DAY_HOURS_FIRST < date.getHours() && DAT_HOURS_SECOND > date.getHours() ) {
            alert('Good day, dear Admin!')
        } else {
            alert('Good evening, dear Admin!')
        }
    } else {
        alert('Wrong password')
    }
} else {
    alert('I don’t know you')
}