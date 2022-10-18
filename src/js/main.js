const cvcOnCard = document.querySelector('.bg-gradient__cvc')
const numberOnCard = document.querySelector('.bg-gradient__number-card')
const nameOnCard = document.querySelector('.bg-gradient__name-on-card')
const monthOnCard = document.querySelector('.month')
const yearOnCard = document.querySelector('.year')

const cardName = document.querySelector('#cardholder')
const cardNumber = document.querySelector('#cardnumber')
const month = document.querySelector('#mm')
const year = document.querySelector('#yy')
const cvc = document.querySelector('#cvc')

const warnCardholder = document.querySelector('.form__warn-card-cardholder')
const warnCardNumber = document.querySelector('.form__warn-card-number')
const warnDate = document.querySelector('.form__warn-date')
const warnCvc = document.querySelector('.form__warn-cvc')

const confirmButton = document.querySelector('.form__button')
const completedButton = document.querySelector('.completed__button')

const completed = document.querySelector('.completed')



const fillName = () => {
    nameOnCard.textContent = cardName.value; 
}
const fillNumber = () => {
    numberOnCard.textContent = cardNumber.value;
}
const fillMonth = () => {
    if (month.value < 10) {
        monthOnCard.textContent = `0${month.value}`
    } else {
        monthOnCard.textContent = month.value;
    }
}
const fillYear = () => {
    if (year.value < 10) {
        yearOnCard.textContent = `0${year.value}`
    } else {
        yearOnCard.textContent = year.value;

    }
}

const fillCvc = () => {
    cvcOnCard.textContent = cvc.value; 

}

const addSpace = () => {
    if (cardNumber.value.length == 4 || cardNumber.value.length == 9 || cardNumber.value.length == 14) {
        cardNumber.value = cardNumber.value + ' ';
    }
}


const validateName = () => {
    if (cardName.value == '') {
        warnCardholder.classList.remove('hide');
        cardName.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        warnCardholder.classList.add('hide');
        cardName.style.border = '1px solid hsl(270, 3%, 87%)';
        validateNumber();
    }

}

const validateNumber = () => {
    let regNum = /^[0-9]+$/;

    if (cardNumber.value == '') {
        warnCardNumber.classList.remove('hide');
        cardNumber.style.border = '1px solid hsl(0, 100%, 66%)'
    } else if (cardNumber.value.match(regNum) || cardNumber.value.length != 19) {
        warnCardNumber.classList.remove('hide');
        warnCardNumber.textContent = 'Wrong format';
        cardNumber.style.border = '1px solid hsl(0, 100%, 66%)'
    } else {
        warnCardNumber.classList.add('hide');
        cardNumber.style.border = '1px solid hsl(270, 3%, 87%)';
        validateMonth();
    }
}

const validateMonth = () => {
    if (month.value == '') {
        warnDate.classList.remove('hide');
        month.style.border = '1px solid hsl(0, 100%, 66%)';

    } else if (month.value > 12) {
        warnDate.classList.remove('hide');
        warnDate.textContent = 'Wrong format';
        month.style.border = '1px solid hsl(0, 100%, 66%)';
    } else {
        warnDate.classList.add('hide');
        month.style.border = '1px solid hsl(270, 3%, 87%)';
        validateYear();
    }
}

const validateYear = () => {
    let currentData = new Date().getFullYear();

    if (year.value == '') {
        warnDate.classList.remove('hide');
        year.style.border = '1px solid hsl(0, 100%, 66%)';

    } else if (year.value < currentData-2000) {
        warnDate.classList.remove('hide');
        warnDate.textContent = 'Wrong format';
        year.style.border = '1px solid hsl(0, 100%, 66%)';
    } else {
        warnDate.classList.add('hide');
        year.style.border = '1px solid hsl(270, 3%, 87%)';
        validateCvc();
    }
}

const validateCvc = () => {

    if (cvc.value == '') {
        warnCvc.classList.remove('hide');
        cvc.style.border = '1px solid hsl(0, 100%, 66%)';

    } else if (cvc.value < 100 || cvc.value > 999) {
        warnCvc.classList.remove('hide');
        warnCvc.textContent = 'Wrong format';
        cvc.style.border = '1px solid hsl(0, 100%, 66%)';
    } else {
        warnCvc.classList.add('hide');
        cvc.style.border = '1px solid hsl(270, 3%, 87%)';
        allCompleted();
    }
}

const allCompleted = () => {
    completed.classList.remove('hide-popup');
}

const resetPopup = () => {
    completed.classList.add('hide-popup');
    nameOnCard.textContent = 'Jane Appleseed';
    numberOnCard.textContent = '0000 0000 0000 0000';
    cvcOnCard.textContent = '000';
    monthOnCard.textContent = '00';
    yearOnCard.textContent = '00';

    cardName.value = '';
    cardNumber.value = '';
    month.value = '';
    year.value = '';
    cvc.value = '';
}



completedButton.addEventListener('click', resetPopup)
confirmButton.addEventListener('click', validateName)
cardNumber.addEventListener('keydown', addSpace)
cardName.addEventListener('keyup', fillName)
cardNumber.addEventListener('keyup', fillNumber)
month.addEventListener('keyup', fillMonth)
year.addEventListener('keyup', fillYear)
cvc.addEventListener('keyup', fillCvc)

