const cvcOnCard = document.querySelector('.bg-gradient__cvc')
const numberOnCard = document.querySelector('.bg-gradient__number-card')
const nameOnCard = document.querySelector('.bg-gradient__name-on-card')
const monthOnCard = document.querySelector('.month')
const yearOnCard = document.querySelector('.year')

const cardName = document.querySelector('#cardholder')
const cardNumber = document.querySelector('#cardnumber')
const month = document.querySelector('#mm')
const year = document.querySelector('#yy')
const dateTwoInput = document.querySelector('.form__two-input-date')
const cvc = document.querySelector('#cvc')


const warnCardholder = document.querySelector('.form__warn-card-cardholder')
const warnCardNumber = document.querySelector('.form__warn-card-number')
const warnDate = document.querySelector('.form__warn-date')
const warnCvc = document.querySelector('.form__warn-cvc')
const warnForm = document.querySelector('.form-warn')

const confirmButton = document.querySelector('.form__button')
const completedButton = document.querySelector('.completed__button')

const completed = document.querySelector('.completed')

const borderColorRed = '1px solid hsl(0, 100%, 66%)';
const borderColorGrey = '1px solid hsl(270, 3%, 87%)';

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



const showError = (element, msg) => {
    element.nextElementSibling.classList.add('hide')
    element.style.border = borderColorRed
    element.nextElementSibling.textContent = msg
}

const clearError = (element) => {
    element.nextElementSibling.classList.remove('hide')
    element.style.border = borderColorGrey
}

const checkLength = (input, min) => {
    
    if(input.value.length < min) {
        showError(input, 'Wrong format')
    } 
}


const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, 'Can t be blank!')
        } else {
            clearError(el)
        }
    })
}

const reNum = /[^0-9]/igm;
const reMonth = /^0[1-9]|1[0-2]$/;
const reYear = /^[2-9][2-9]$/;

const checkRegEx = (input, reg) => {
    
    if(reg.test(input.value)) {
        clearError(input);
    } else { 
        showError(input, "Wrong format");
    }
    
}

const checkerrors = () => {
    const allInputs = document.querySelectorAll('.form__warn')
    let errorCount = 0

    allInputs.forEach(el => {
        if(el.classList.contains('hide')) {
            errorCount++;
        }
    })
    if(errorCount === 0 ) {
        completed.classList.add('show-popup')
    }
}


const resetPopup = () => {
    completed.classList.remove('show-popup');
    nameOnCard.textContent = 'Jane Appleseed';
    numberOnCard.textContent = '0000 0000 0000 0000';
    cvcOnCard.textContent = '000';
    monthOnCard.textContent = '00';
    yearOnCard.textContent = '00';
    [cardName, cardNumber, month, year, cvc].forEach(element => {
        element.value = ''
    })
}

confirmButton.addEventListener('click', e => {
    e.preventDefault();

    checkForm([cardName, cardNumber, month, year, cvc]);
    checkLength(cardNumber, 16);
    checkLength(cvc, 3)
    checkRegEx(month, reMonth);
    checkRegEx(year, reYear);
    checkRegEx(cardNumber, reNum);
    checkerrors();
})

completedButton.addEventListener('click', resetPopup)
cardNumber.addEventListener('keydown', addSpace)
cardName.addEventListener('keyup', fillName)
cardNumber.addEventListener('keyup', fillNumber)
month.addEventListener('keyup', fillMonth)
year.addEventListener('keyup', fillYear)
cvc.addEventListener('keyup', fillCvc)

