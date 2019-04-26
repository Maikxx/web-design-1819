import 'regenerator-runtime'
import { setupYearEvents } from './events/yearEvents'
import { State } from './state'
import { setupMonthEvents } from './events/monthEvents'
import { setupDayEvents } from './events/dayEvents'
import { setupTypeOfFlightEvents } from './events/typeOfFlightEvents'
import { setupAirportEvents } from './events/airportEvents'
import { setupDepartureEvents } from './events/departureEvents'
import anime from 'animejs'

(() => {
    const state = new State({
        selectedTypeOfFlight: 'retour',
        departureAirport: 'Amsterdam',
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
    setupDepartureEvents(state)

    anime({
        targets: '#WorldGlobe',
        rotate: -360,
        loop: true,
        duration: 1000,
        delay: 500,
        easing: 'steps(5)'
    })
})()
