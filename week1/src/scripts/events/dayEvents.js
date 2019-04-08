import { times } from 'lodash'

export function setupDayEvents(state) {
    const selectedYear = state.get('selectedYear')
    const selectedMonth = state.get('selectedMonth')

    const amountOfDaysInSelectedMonth = getAmountOfDaysInMonth(selectedMonth, selectedYear)
    const buttonContainer = document.querySelector('.ButtonContainer--day')

    if (buttonContainer && amountOfDaysInSelectedMonth) {
        times(amountOfDaysInSelectedMonth).forEach(createDayButton(buttonContainer))
    }
}

function createDayButton(buttonContainer) {
    return function(day) {
        const buttonBlock = document.createElement('a')

        buttonBlock.classList.add('ButtonBlock')
        buttonBlock.classList.add('ButtonBlock--tiny')
        buttonBlock.setAttribute('href', '#')
        buttonBlock.innerText = day + 1

        buttonContainer.appendChild(buttonBlock)
    }
}

function getAmountOfDaysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate()
}