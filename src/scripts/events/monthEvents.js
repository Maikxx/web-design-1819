import { eventKeys } from './eventKeys'

export function setupMonthEvents(state) {
    const monthContainer = document.querySelector('.ButtonContainer--month')

    if (monthContainer) {
        const monthButtons = monthContainer.querySelectorAll('.ButtonBlock')

        if (monthButtons && monthButtons.length > 0) {
            monthButtons.forEach(button => {
                button.addEventListener('click', onMonthClick(button))
                button.addEventListener('focus', onButtonFocus)
            })
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

    function onMonthClick(button) {
        return function() {
            const changeMonthEvent = new CustomEvent('monthChanged')
            const monthNumber = Number(button.getAttribute('data-value'))

            if (typeof monthNumber !== 'number') {
                throw new Error('The button clicked does not have a month number...')
            }

            if (monthNumber > -1 && monthNumber < 12) {
                state.set('selectedMonth', monthNumber)
                window.dispatchEvent(changeMonthEvent)

                const monthSpan = document.getElementById('mm')

                if (monthSpan) {
                    monthSpan.innerText = String(monthNumber + 1).padStart(2, '0')

                    const fullDate = document.getElementById('full-date')

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
}