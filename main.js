//https://api.adviceslip.com/advice
//ID - Number Advice
const idAdvice = document.querySelector('.container__adviceMain__title');
//Div msg advice
const msgAdvice = document.querySelector('.container__adviceMain__msg');
//Btn-reload a new adviceS
const btnAdvice = document.querySelector('.container__adviceMain__btn');

//Event Click - btnAdvice
//btnAdvice.addEventListener('click', () => document.location.reload());
btnAdvice.addEventListener('click', () => {
    //call function Api
    loadRequest();
});
window.onload = () => {
    //call function Api
    loadRequest();
};

//Function to onload - API advice
const loadRequest = () => {
    const requestURL = 'https://api.adviceslip.com/advice'; //Total 224 advice
    const request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    //function onload JSON
    request.onload = function () {
        const requestJSON = request.response;
        adviceRequest(requestJSON);
    };
};
//function - receives the JSON and writed in the DOM
const adviceRequest = (requestJSON) => {
    idAdvice.innerText = 'Advice #' + requestJSON.slip.id;
    msgAdvice.innerText = '"' + requestJSON.slip.advice + '"';
};
