import { eventKeys } from './eventKeys'

export function setupYearEvents(state) {
    const previousYearButton = document.getElementById('previous-year-set')
    const nextYearButton = document.getElementById('next-year-set')
    const buttonContainer = document.querySelector('.ButtonContainer--year')

    previousYearButton.addEventListener('click', changeSubsetYears('back'))
    nextYearButton.addEventListener('click', changeSubsetYears('forwards'))

    previousYearButton.addEventListener('focus', applySubsetYearsFocusListener('back'))
    nextYearButton.addEventListener('focus', applySubsetYearsFocusListener('forwards'))

    function applySubsetYearsFocusListener(side) {
        return function(event) {
            if (event.target) {
                event.target.addEventListener('keydown', ({ key }) => {
                    if (eventKeys.includes(key)) {
                        changeSubsetYears(side)()
                    }
                })
            }
        }
    }

    function createYearButtons(fromYear) {
        const currentYear = fromYear || new Date().getFullYear()
        const years = [currentYear - 1, currentYear, currentYear + 1]
        changeNavigationButtons(currentYear)

        years.forEach(createYearButton)
    }


    function createYearButton(year) {
        const buttonBlock = document.createElement('a')

        buttonBlock.classList.add('ButtonBlock')
        buttonBlock.setAttribute('href', '#month')
        buttonBlock.innerText = year
        buttonBlock.addEventListener('click', selectYear)

        buttonBlock.addEventListener('focus', onButtonFocus)
        buttonContainer.appendChild(buttonBlock)
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

    function selectYear({ target }) {
        state.set('selectedYear', Number(target.innerText))

        const yearSpan = document.getElementById('YYYY')

        if (yearSpan) {
            yearSpan.innerText = Number(target.innerText)

            const buttonContainer = document.querySelector('.ButtonContainer--year')
            const buttons = buttonContainer.querySelectorAll('.ButtonBlock')

            if (buttons) {
                buttons.forEach(button => {
                    button.classList.remove('active')
                })

                const { target } = event

                if (target) {
                    target.classList.add('active')
                }
            }

            const fullDate = document.getElementById('full-date')

            if (fullDate) {
                fullDate.style.color = '#FF8749'

                setTimeout(() => {
                    fullDate.style.color = 'white'
                }, 200)
            }
        }
    }

    function changeSubsetYears(direction) {
        return function() {
            const buttonBlocks = buttonContainer.querySelectorAll('.ButtonBlock')
            let nextSubsetYear

            if (direction === 'forwards') {
                const lastButtonBlockYear = Number(buttonBlocks[buttonBlocks.length - 1].innerText)
                nextSubsetYear = lastButtonBlockYear + 2
            } else {
                const firstButtonBlockYear = Number(buttonBlocks[0].innerText)
                nextSubsetYear = firstButtonBlockYear - 2
            }

            buttonContainer.innerHTML = ''
            createYearButtons(nextSubsetYear)
            changeNavigationButtons(nextSubsetYear)
        }
    }

    function changeNavigationButtons(year) {
        previousYearButton.innerText = `${year - 4} - ${year - 2}`
        nextYearButton.innerText = `${year + 2} - ${year + 4}`
    }

    createYearButtons()
}