
/**************************СЛАЙДЕР**********************************/
/*const prev = document.querySelector(`.slider__button-right`);
const next = document.querySelector(`.slider__button-left`);*/
const slides = document.querySelectorAll('.slide') /*псевдомассив элементов с классом slide*/
const dots = document.querySelectorAll('.dot') /*псевдомассив элементов с классом dot*/

let index = 0; /*номер картинки в коллекеции*/
const sliderLine = document.querySelector('.slider__wrapper-container-line'); /*блок с картинками*/
let ofLeft = 0; /* конечная точка смещение блока от левого края*/
let currentPosition = 0; /*величина приращения*/
let access = true; /*true можно начать выполнять функцию, false - нельзя*/
let slidesSize = 700; /*размер контейнера слайда*/
console.log(ofLeft);
console.log(slides.length);
let timer;
let timerLast;
let timerDot;
let timerDots;


/*функция расстановки сладов по контейнеру*/
/*function setupSlides(indSl) {

    slides.forEach((itemSlide, indexSlide) => {
        if (indexSlide === indSl) {
            itemSlide.style.left = 0 + 'px'; /!*видимый слайд*!/
        }
        if (indexSlide > indSl) {
            for (; indexSlide <= slides.length - 1; indexSlide++) {
                itemSlide[indexSlide].style.left = itemSlide[indexSlide - 1].style.left + 700 + 'px'; /!*слайды уходящие врпаво*!/
            }
        }
        if (indexSlide < indSl) {
            for (; indexSlide >= 0; indexSlide--) {
                itemSlide[indexSlide].style.left = itemSlide[indexSlide + 1].style.left - 700 + 'px'; /!*слайды уходящие влево*!/
            }
        }
    })
}*/
/*setupSlides(0);*/
/*расставляем слайды в изначальные позиции*/
/*нулевой видно остальные справа*/
slides.forEach((itemSlide, indexSlide) => {
   if (indexSlide !== 0) {
       itemSlide.style.left = slidesSize + 'px'; /*256 + px*/
   } else {
       itemSlide.style.left = 0 + 'px';  /*0+ px*/
   }
})


function moveLeft() { /*функция контролер для прокрутки влево*/
   if (access) {
       if (index == slides.length - 1) {  /*если слайд последний то...*/
           /*точка входа*/
           access = false;
           currentPosition = 0;
           index = 0;
           timerLast = setInterval(lastLeft, 3);

       } else {
           /*точка входа*/
           access = false;
           currentPosition = 0;
           timer = setInterval(left, 3);
       }
   }
}

function moveRight() { /*функция контролер для прокрутки вправо*/
    if (access) {
        if (index == 0) {  /*если слайд последний то...*/
            /*точка входа*/
            access = false;
            currentPosition = 0;
            index = slides.length - 1;
            timerLast = setInterval(lastRight, 3);

        } else {
            /*точка входа*/
            access = false;
            currentPosition = 0;
            timer = setInterval(right, 3, index);
        }
    }
}

function lastLeft() { /*смещение последнего слайда с перемещением первого на его место*/
    ofLeft = slidesSize; /*сохраняем минимальное смещение в 256 px*/

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(timerLast);
        access = true;
        index = 0;
        /*точка выхода*/
    }
    else {
        incrementLeft(slides.length - 1, index);
        activeDot(index);
    }
}

function lastRight() { /*смещение первого слайда с перемещением последнего на его место*/
    ofLeft = slidesSize; /*сохраняем минимальное смещение в 256 px*/

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        clearInterval(timerLast);
        access = true;
        index = slides.length - 1;
        /*точка выхода*/
    }
    else {
        incrementRight(0, slides.length - 1);
        activeDot(slides.length - 1);
    }
}

function left() { /*функция смещения двух слайдов влево*/
    ofLeft = slidesSize;

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        index++;
        currentPosition = 0;
        clearInterval(timer);
        access = true;
        /*точка выхода*/
    }
    else {
        incrementLeft(index, index + 1);
        activeDot(index + 1);
    }
}

function right(ind) { /*функция смещения двух слайдов вправо*/
    ofLeft = slidesSize;

    if (currentPosition == ofLeft) {  /*останавливаем движение*/
        ind--;
        currentPosition = 0;
        clearInterval(timer);
        access = true;
        index = ind;
        /*точка выхода*/
    }
    else {
        incrementRight(ind, ind - 1);
        activeDot(ind - 1);
    }
}

function incrementLeft(firstInd, secondInd) { /*функция смещения на 1 px двух слайдов влево*/
    currentPosition++;
    slides[firstInd].style.left = (ofLeft - slidesSize) - currentPosition + 'px'; /*движение текущего (кто уйдет)*/
    slides[secondInd].style.left = ofLeft - currentPosition + 'px'; /*движение след. справа (кто останется)*/
}

function incrementRight(firstInd, secondInd) { /*функция смещения на 1 px двух слайдов вправо*/
    currentPosition++;
    slides[firstInd].style.left = (ofLeft - slidesSize) + currentPosition + 'px'; /*движение текущего (кто уйдет)*/
    slides[secondInd].style.left = -ofLeft + currentPosition + 'px'; /*движение предыдущего, слева (кто останется)*/
}

function activeDot(n) { /*функция для выделения текущей точки*/
    for (dot of dots) {
        dot.classList.remove('active'); /*у всех класс удалили*/
    }
    dots[n].classList.add('active') /*избранному класс оставили*/
}


function moveDotRight(ind, startPoint, endPoint, increment) {
    console.log(' я внутри moveDotRight slides[ind].style.left = ' + slides[ind].style.left + ' increment = ' + increment);
    let timerDotRight = setInterval(() => {
            let slidesWay = Math.abs(startPoint) + Math.abs(endPoint);
            if (increment >= slidesWay) {  /*останавливаем движение*/
                clearInterval(timerDotRight);
                access = true;
                index = ind;
                /*точка выхода*/
            }
            else {
                increment++;
                slides[ind].style.left = startPoint + increment + 'px';
            }
    }, 1);

}

dots.forEach((itemD, indexDot) =>{ /*пробежались по массиву точек и всем разадли по ивенту*/
    itemD.addEventListener('click', () => {

        /*если слайд находится СЛЕВА от активируемой точки*/
        if (index > indexDot) {
            let iterCounter = index - indexDot ; /*посчитали требуемое количество итераций*/
            moveDotRight(index, 0, 700, 0)
            index--;
            for (; index >= indexDot ; index--) {
                if (index === indexDot) {
                    moveDotRight(index, (-iterCounter + index) * 700, 0, 0) /*сравнивая increment и endPoint  сравниваем 0 с 0*/
                } else {
                    moveDotRight(index, (-iterCounter + index) * 700, 700, 0)
                }
            }
            index = indexDot;
            activeDot(index);
        }

    })
})


document.querySelector(`.slider__button-left`).addEventListener('click', moveLeft);
document.querySelector(`.slider__button-right`).addEventListener('click', moveRight);






