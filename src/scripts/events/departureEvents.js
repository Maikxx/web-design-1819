import { eventKeys } from './eventKeys'

export function setupDepartureEvents(state) {
    const departureLocations = document.querySelectorAll('[name=departure-location]')

    if (departureLocations && departureLocations.length > 0) {
        departureLocations.forEach(option => {
            option.addEventListener('click', onSelectOption(departureLocations))
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

    function onSelectOption(departureLocations) {
        return function (event) {
            event.preventDefault()
            const { value } = event.target

            state.set('departureAirport', value)

            departureLocations.forEach(element => {
                element.parentNode.classList.remove('Switch--selected')
            })

            event.target.parentNode.classList.add('Switch--selected')
        }
    }
}