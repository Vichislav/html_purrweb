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
let startMuv = true; /*true можно начать выполнять функцию, false - нельзя*/
console.log(ofLeft);
console.log(slides.length);
slides[0].style.left = 0 + 'px';
slides[1].style.left = 256 + 'px';
slides[2].style.left = 512 + 'px';
slides[3].style.left = 768 + 'px';
let timer;
let timerLast;

function muvLeft() {
   if (startMuv) {
       if(index == slides.length - 1) {  /*если слайд последний то...*/
           /*точка входа*/
           startMuv = false;
           currentPosition = 0;
           index = 0;
           console.log("if muvLeft work index = " + index + " currentPosition = " + currentPosition);
           timerLast = setInterval(lastLeft, 5);

       } else {
           /*точка входа*/
           startMuv = false;
           currentPosition = 0; /*???*/
           console.log("else muvLeft work index = " + index + " currentPosition = " + currentPosition)
           timer = setInterval(left, 5);
       }
   }
}

function lastLeft() {
    ofLeft = 256; /*сохраняем минимальное смещение в 256 px*/

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(timerLast);
        console.log("if lastLeft work index = " + index + " currentPosition = " + currentPosition);
        startMuv = true;
        index = 0;
        /*точка выхода*/
    }
    else {
        console.log("else lastLeft work index = " + index + " currentPosition = " + currentPosition);
        incrementLeft(slides.length - 1, index);
        activeDot(index);
    }
}

function left() {
    ofLeft = 256; /*(idex+1)*256?*/

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        index++
        clearInterval(timer);
        console.log("if left work index = " + index + " currentPosition = " + currentPosition);
        startMuv = true;
        /*точка выхода*/
    }
    else {
        console.log("else left work index = " + index + " currentPosition = " + currentPosition);
        incrementLeft(index, index+1);
        activeDot(index+1);
    }
}

function incrementLeft(firstInd, secondInd) { /*функция смещения двух слайдов*/
    currentPosition++;
    slides[firstInd].style.left = (ofLeft-256) -currentPosition + 'px'; /*движение текущего (кто уйдет)*/
    slides[secondInd].style.left = ofLeft - currentPosition + 'px'; /*движение след. справа (кто останется)*/
}


function activeDot (n) { /*функция для выделения текущей точки*/
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}

function incrementLeftDot() { /*функция смещения двух слайдов*/
    currentPosition++;
    slides[index].style.left = (ofLeft - 256) - currentPosition + 'px'; /*движение текущего (кто уйдет)*/
    slides[index + 1].style.left = ofLeft - currentPosition + 'px'; /*движение след. справа (кто останется)*/
}

dots.forEach((itemD, indexDot) =>{
    itemD.addEventListener('click', () => {
        console.log(indexDot + 'я снаружи');
            if (indexDot > index) {
                let cycleInd = indexDot - index; /*это бы было бы колличеством раз прокрутки...*/
                console.log(indexDot + 'я внутри');
                timer = setInterval(left, 5);
                currentPosition = 0;
            }

        if (indexDot === index) {}
        if (indexDot < index) {}
    })
})

document.querySelector(`.slider__button-left`).addEventListener('click', muvLeft);






