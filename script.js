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

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {  /*если слайд последний то...*/
        index = 0; /*переходим на первый*/
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {  /*если слайд первый то...*/
        index = slides.length - 1; /*переходим на последний*/
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) =>{
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
/*const sliderLine = document.querySelector('.slider__wrapper-line');
let offset = 0; // смещение от левого края*/

/*СМЕЩЕНИЕ ВЛЕВО С АНИМАЦИЕЙ не получается выйти из цикла else корректно*/
function muvLeft() {
    console.log("muvLeft work")
    setInterval(left, 10);
}
function left() {
    if (offset === 256) {  /*останавливаем движение*/
        clearInterval(muvLeft);
        console.log("if left work")
    }
    else {
        console.log("else left work") /*двигаем влево*/
        offset++;
        sliderLine.style.left = -offset + 'px';
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





