const root = document.getElementById('root');

JSON.parse(localStorage.getItem('BookList'));

function Page() {

    const createDiv = document.createElement('div');
    const createMainHeader = document.createElement('h1');
    const createSecondHeader = document.createElement('h2');
    const createThirdHeader = document.createElement('h3');
    const createLink = document.createElement('a');
    const createPar = document.createElement('p');

    createDiv.setAttribute('class', 'main');
    createMainHeader.setAttribute('class', 'main_header');
    createSecondHeader.setAttribute('class', 'main_second-header');
    createThirdHeader.setAttribute('class', 'main_third-header');
    createLink.setAttribute('class', 'main_link');
    createPar.setAttribute('class', 'main_par');

    document.querySelector('.main_header').innerHTML('Book List');

    createDiv.appendChild(createMainHeader);
    createDiv.appendChild(createSecondHeader);
    createDiv.appendChild(createThirdHeader);
    createDiv.appendChild(createLink);
    createDiv.appendChild(createPar);

}

const WEBPAGE = new Page();

window.addEventListener('hashchange', hashControl);

function hashControl() {

    if (window.location.hash === '1') {
        WEBPAGE.firstBook();
    } else if (window.location.hash === '2') {
        WEBPAGE.secondBook();
    } else if (window.location.hash === '3') {
        WEBPAGE.thirdBook();
    }
    
}