/*получили инпуты*/
let inputName = document.querySelector('.form__input-name');
let inputVenueName = document.querySelector('.form__input-venueName');
let inputVenueCity = document.querySelector('.form__input-venueCity');
let inputStateName = document.querySelector('.form__input-stateName');
let inputEmail = document.querySelector('.form__input-email');
let inputSubject = document.querySelector('.form__input-subject');
let inputMessage = document.querySelector('.form__input-massage');


let offset = 0 // смещение от левого края
const sliderLine = document.querySelector('.slider__wrapper-line');

console.log(offset);

function left() {
    console.log(offset + 'left()');
    offset++;
    sliderLine.style.left = -offset + 'px';
}


document.querySelector(`.slider__button-right`).addEventListener('click', function (){
    if (offset % 256 == 0) {
        stop();
    }else {
        console.log(offset + 'else');
        setInterval(left, 10);
    }
});


document.querySelector('.slider__button-left').addEventListener('click', function (){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


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


