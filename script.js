/*получили инпуты*/
const inputs = document.querySelectorAll('.selectInput');

/*Красим границы инпутов в красный путем удаления одного стиля и добавления нового*/
function getRed() {
    inputs.forEach((itemInput, indexInput) => {
        itemInput.classList.remove('inputBorderW');
        itemInput.classList.add('inputBorderRed');
    })
}
/*получили кнопку*/
let btnSend = document.querySelector('.form__button');
/*повесили на нее слушатель события click, и выполнением функции getRed*/
btnSend.addEventListener( 'click', getRed, false)









