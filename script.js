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

let index = 0; /*номер картинке в коллекеции*/
const sliderLine = document.querySelector('.slider__wrapper-line'); /*блок с картинками*/
let ofLeft = 0; /* конечная точка смещение блока от левого края*/
let currentPosition = 0;
let endPoint = 1;
console.log(ofLeft);
console.log(slides.length);
slides[0].style.left = 0 + 'px';
slides[1].style.left = 256 + 'px';
slides[2].style.left = 512 + 'px';
slides[3].style.left = 768 + 'px';

function muvLeft() {
    if(index == slides.length - 1) {  /*если слайд последний то...*/
        index = 0; /*переходим на первый*/
        currentPosition = 0;
        setInterval(lastLeft, 5);
        console.log("lastLeft work")
    } else {
        index++;
        console.log("muvLeft work")
        setInterval(left, 5);
    }
}

function lastLeft() {
    ofLeft = 256; /*сохраняем минимальное смещение в 256 px*/
    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(lastLeft);
        console.log("if lastLeft work")
    }
    else {
        console.log("else lastLeft work") /*двигаем влево*/
        currentPosition++;
        slides[index].style.left = 256 -currentPosition + 'px';
        slides[index - (slides.length - 1)].style.left = -currentPosition + 'px';
    }
}
function left() {
    if(index == 0) {
        ofLeft = 256; /*(idex+1)*256?*/
    }else {
        ofLeft = index * 256; /*высчитываем край смещения*/
    }
    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(muvLeft);
        console.log("if left work")
    }
    else {
        console.log("else left work") /*двигаем влево*/
        currentPosition++;
        slides[index].style.left = -currentPosition + 'px';
        slides[index - 1].style.left = -currentPosition + 'px';
    }
}
document.querySelector(`.slider__button-right`).addEventListener('click', muvLeft);

/* /!*СМЕЩЕНИЕ ВЛЕВО БЕЗ АНИМАЦИИ*!/
document.querySelector('.slider__button-left').addEventListener('click', function (){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});*/





