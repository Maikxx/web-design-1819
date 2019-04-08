import 'regenerator-runtime'
import { setupYearEvents } from './events/yearEvents'
import { State } from './state'
import { setupMonthEvents } from './events/monthEvents'
import { setupDayEvents } from './events/dayEvents'

(() => {
    const state = new State({
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth(),
    })

    setupYearEvents(state)
    setupMonthEvents(state)
    setupDayEvents(state)
})()
