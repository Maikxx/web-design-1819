import { eventKeys } from './eventKeys'

export function setupTypeOfFlightEvents(state) {
    const typeOfFlightOptions = document.querySelectorAll('[name=type-of-flight]')

    if (typeOfFlightOptions && typeOfFlightOptions.length > 0) {
        typeOfFlightOptions.forEach(option => {
            option.addEventListener('click', onSelectOption(typeOfFlightOptions))
            option.addEventListener('focus', onFocusOnOption)
        })
    }

    function onFocusOnOption({ target }) {
        if (target) {
            target.addEventListener('keydown', ({ key }) => {
                if (key === 'ArrowRight' || key === 'ArrowLeft') {
                    return
                }

                if (eventKeys.includes(key)) {
                    target.click()
                }
            })
        }
    }

    function onSelectOption(typeOfFlightOptions) {
        return function (event) {
            event.preventDefault()
            const { value } = event.target

            state.set('selectedTypeOfFlight', value)

            typeOfFlightOptions.forEach(element => {
                element.parentNode.classList.remove('Switch--selected')
            })

            event.target.parentNode.classList.add('Switch--selected')
            window.location.hash = '#departure-location'
        }
    }
}