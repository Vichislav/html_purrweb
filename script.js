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
let startMove = true; /*true можно начать выполнять функцию, false - нельзя*/
console.log(ofLeft);
console.log(slides.length);
/*начальные позиции для простоты восприятия*/
slides[0].style.left = 0 + 'px';
slides[1].style.left = 256 + 'px';
slides[2].style.left = 512 + 'px';
slides[3].style.left = 768 + 'px';
let timer;
let timerLast;
let timerDot;
let timerDots;

function moveLeft() {
   if (startMove) {
       if(index == slides.length - 1) {  /*если слайд последний то...*/
           /*точка входа*/
           startMove = false;
           currentPosition = 0;
           index = 0;
           console.log("if muvLeft work index = " + index + " currentPosition = " + currentPosition);
           timerLast = setInterval(lastLeft, 5);

       } else {
           /*точка входа*/
           startMove = false;
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
        startMove = true;
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
        index++;
        currentPosition = 0; /*???*/
        clearInterval(timer);
        console.log("if left work index = " + index + " currentPosition = " + currentPosition);
        startMove = true;
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
        dot.classList.remove('active'); /*у всех класс удалили*/
    }
    dots[n].classList.add('active') /*избранному класс оставили*/
}


dots.forEach((itemD, indexDot) =>{ /*пробежались по массиву точек и всем разадли по ивенту*/
    itemD.addEventListener('click', () => {
          console.log(indexDot + ' я снаружи');

        slides.forEach((itemS, indexS) =>{ /*пробижались по массиву слайдов*/
            /*раскидываем незатребованные слайды по бокам*/
            if (indexS < indexDot) { /*если слайд находится слева от активируемой точки*/
                slides[indexS].style.left = -256 + 'px'; /*смещаем до конца влево от экрана слайдера*/
            }
            if (indexS > indexDot) { /*если слайд находится справа от активируемой точки*/
                slides[indexS].style.left = +256 + 'px'; /*смещаем вправо от экрана слайдера*/
            }
            if (indexS === indexDot) { /*если слайд соответствует активной точке*/
                slides[indexS].style.left = 0 + 'px'; /*оставляем его на экране*/
            }
        })
        index = indexDot;
        activeDot(index);
    })
})

document.querySelector(`.slider__button-left`).addEventListener('click', moveLeft);






