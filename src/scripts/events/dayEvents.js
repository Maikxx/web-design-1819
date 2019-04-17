import { times } from 'lodash'
import { eventKeys } from './eventKeys'

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
        buttonBlock.addEventListener('click', onDayButtonClick(day))
        buttonBlock.addEventListener('focus', onButtonFocus)

        buttonBlock.innerText = String(day + 1).padStart(2, '0')

        buttonContainer.appendChild(buttonBlock)
    }

    function onDayButtonClick(day) {
        return function(event) {
            event.preventDefault()
            state.set('selectedDay', day)

            const daySpan = document.getElementById('dd')

            if (daySpan) {
                daySpan.innerText = String(day + 1).padStart(2, '0')

                const fullDate = document.getElementById('full-date')

                if (fullDate) {
                    if (fullDate) {
                        fullDate.style.color = '#FF8749'

                        setTimeout(() => {
                            fullDate.style.color = 'white'
                        }, 200)
                    }
                }
            }
        }
    }

    function onButtonFocus({ target }) {
        if (target) {
            target.addEventListener('keydown', ({ key }) => {
                if (eventKeys.includes(key)) {
                    target.click()
                }
            })
        }
    }
}

function getAmountOfDaysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate()
}