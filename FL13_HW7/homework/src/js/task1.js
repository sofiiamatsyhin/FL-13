let login = prompt('Write your login', 'login');
let password;
let user = {
    'User' : 'UserPass',
    'Admin' : 'RootPass'
};
let date = new Date();
let minSymbols = 4;
let dayHoursFirst = 8;
let dayHoursSecond = 20;
if ( login === null || login ==='') {
    alert('Canceled')
} else if ( login.length < minSymbols ) {
    alert(`I don't know any users having name length less than 4 symbols`)
} else if ( user[login] ) {
    password = prompt('Write your password', 'password');
    if ( password === null || password === '') {
        alert('Canceled')
    } else if ( login === 'User' && password === 'UserPass' ) {
        if ( dayHoursFirst < date.getHours() && dayHoursSecond > date.getHours() ) {
            alert('Good day, dear User!')
        } else {
            alert('Good evening, dear User!')
        }
    } else if ( login === 'Admin' && password === 'RootPass') {
        if( dayHoursFirst < date.getHours() && dayHoursSecond > date.getHours() ) {
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