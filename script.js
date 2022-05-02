/*получили инпуты*/
let inputName = document.querySelector('.form__input-name');
let inputVenueName = document.querySelector('.form__input-venueName');
let inputVenueCity = document.querySelector('.form__input-venueCity');
let inputStateName = document.querySelector('.form__input-stateName');
let inputEmail = document.querySelector('.form__input-email');
let inputSubject = document.querySelector('.form__input-subject');
let inputMessage = document.querySelector('.form__input-massage');

/*Красим границы инпутов в красный*/
/*помещаем все импуты в массив*/
let inputArr = [inputName, inputVenueName, inputVenueCity, inputStateName, inputEmail, inputSubject, inputMessage];

/*получили кнопку*/
let btnSend = document.querySelector('.form__button');
/*повесили на нее слушатель события click, и выполнением функции changeStyle*/
btnSend.addEventListener( 'click', changeStyle, false)

/*описали собственно функцию*/
function changeStyle() {
    for (let i = 0; i < inputArr.length; i++) {
        /*удаляем у всех элементов стиль отвечающий за цвет границы инпута*/
        inputArr[i].classList.remove('inputBorderW');
        /*добавляем всем новый стиль отвечающий за красный цвет границы инпута*/
        inputArr[i].classList.add('inputBorderRed');
    }
}

/*СЛАЙДЕР*/
const prev = document.querySelector(`.slider__button-right`);
const next = document.querySelector(`.slider__button-left`);
const slides = document.querySelectorAll('.slide') /*псевдомассив элементов с классом slide*/
const dots = document.querySelectorAll('.dot') /*псевдомассив элементов с классом dot*/

let index = -1; /*номер картинке в коллекеции*/
const sliderLine = document.querySelector('.slider__wrapper-line'); /*блок с картинками*/
let ofLeft = 0; /* конечная точка смещение блока от левого края*/
let currentPosition = 0;
let incr = 1;
console.log(ofLeft);
console.log(slides.length);
slides[0].style.left = 0 + 'px';
slides[1].style.left = 256 + 'px';
slides[2].style.left = 512 + 'px';
slides[3].style.left = 768 + 'px';
let timer;
let timerLast;

function muvLeft() {
    if(index == slides.length - 2) {  /*если слайд последний то...*/
        currentPosition = 0;
        index = 0;
        console.log("if muvLeft work index = " + index + " currentPosition = " + currentPosition);
        timerLast = setInterval(lastLeft, 5);
        incr = 0; /*замедляем инкремент*/
    } else {
        index = index + incr;
        currentPosition = 0; /*???*/
        console.log("else muvLeft work index = " + index + " currentPosition = " + currentPosition)
        timer = setInterval(left, 5);
    }
}

function lastLeft() {
    ofLeft = 256; /*сохраняем минимальное смещение в 256 px*/

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(timerLast);
        console.log("if lastLeft work index = " + index + " currentPosition = " + currentPosition);
    }
    else {
        console.log("else lastLeft work index = " + index + " currentPosition = " + currentPosition);
        currentPosition++;
        slides[slides.length - 1].style.left = (ofLeft-256) -currentPosition + 'px';
        slides[index].style.left = ofLeft - currentPosition + 'px';
    }
}

function left() {
        ofLeft = 256; /*(idex+1)*256?*/

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(timer);
        console.log("if left work index = " + index + " currentPosition = " + currentPosition);
        incr = 1; /*возвращаем инекременту его шаг*/
    }
    else {
        console.log("else left work index = " + index + " currentPosition = " + currentPosition);
        currentPosition++;
        slides[index].style.left = (ofLeft-256) -currentPosition + 'px'; /*движение текущего*/
        slides[index + 1].style.left = ofLeft - currentPosition + 'px'; /*движение след. справа*/
    }
}
document.querySelector(`.slider__button-left`).addEventListener('click', muvLeft);






