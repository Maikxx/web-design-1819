import { times } from 'lodash'

export function setupDayEvents(state) {
    setupDayButtons(state)

    window.addEventListener('monthChanged', () => setupDayButtons(state))
}

function setupDayButtons(state) {
    const selectedYear = state.get('selectedYear')
    const selectedMonth = state.get('selectedMonth')

    const amountOfDaysInSelectedMonth = getAmountOfDaysInMonth(selectedMonth, selectedYear)
    const buttonContainer = document.querySelector('.ButtonContainer--day')

    if (buttonContainer && amountOfDaysInSelectedMonth) {
        buttonContainer.innerHTML = ''
        times(amountOfDaysInSelectedMonth).forEach(createDayButton(state, buttonContainer))
    }
}

function createDayButton(state, buttonContainer) {
    return function(day) {
        const buttonBlock = document.createElement('a')

        buttonBlock.classList.add('ButtonBlock')
        buttonBlock.classList.add('ButtonBlock--tiny')
        buttonBlock.setAttribute('href', '#')
        buttonBlock.addEventListener('click', (event) => {
            event.preventDefault()

            state.set('selectedDay', day)

            updateFullDate(state)
        })
        buttonBlock.innerText = day + 1

        buttonContainer.appendChild(buttonBlock)
    }
}

function updateFullDate(state) {
    const selectedYear = state.get('selectedYear')
    const selectedMonth = state.get('selectedMonth')
    const selectedDay = state.get('selectedDay')

    const fullDateSpan = document.getElementById('full-date')
    const dateExists = selectedYear
        && typeof selectedMonth === 'number'
        && typeof selectedDay === 'number'

    if (fullDateSpan && dateExists) {
        const fullDate = new Date(selectedYear, selectedMonth, selectedDay + 1)

        if (fullDate) {
            fullDateSpan.innerText = fullDate.toLocaleDateString()
        }
    }
}

function getAmountOfDaysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate()
}