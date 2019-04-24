import 'regenerator-runtime'
import { setupYearEvents } from './events/yearEvents'
import { State } from './state'
import { setupMonthEvents } from './events/monthEvents'
import { setupDayEvents } from './events/dayEvents'
import { setupTypeOfFlightEvents } from './events/typeOfFlightEvents'
import { setupAirportEvents } from './events/airportEvents'

(() => {
    const state = new State({
        selectedTypeOfFlight: 'retour',
        departureAirport: '',
        destinationAirport: '',
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth(),
        selectedDay: new Date().getDate(),
    })

    setupYearEvents(state)
    setupMonthEvents(state)
    setupDayEvents(state)
    setupTypeOfFlightEvents(state)
    setupAirportEvents(state)
})()
