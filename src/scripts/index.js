import 'regenerator-runtime'
import { setupYearEvents } from './events/yearEvents'
import { State } from './state'
import { setupMonthEvents } from './events/monthEvents'
import { setupDayEvents } from './events/dayEvents'
import { setupNativeEvents } from './events/nativeEvents'
import { setupTypeOfFlightEvents } from './events/typeOfFlightEvents'

(() => {
    const state = new State({
        selectedTypeOfFlight: 'retour',
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth(),
        selectedDay: new Date().getDate(),
    })

    setupYearEvents(state)
    setupMonthEvents(state)
    setupDayEvents(state)
    setupNativeEvents(state)
    setupTypeOfFlightEvents(state)
})()
