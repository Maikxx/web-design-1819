export function setupAirportEvents(state) {
    const departureField = document.querySelector('#departure-airport')
    const arrivalField = document.querySelector('#destination-airport')

    if (departureField && arrivalField) {
        departureField.addEventListener('keyup', ({ target }) => {
            if (target) {
                state.set('departureAirport', target.value)
            }
        })

        arrivalField.addEventListener('keyup', ({ target }) => {
            if (target) {
                state.set('destinationAirport', target.value)
            }
        })
    }
}