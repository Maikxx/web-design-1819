import 'regenerator-runtime'
import { setupYearEvents } from './events/yearEvents'
import { State } from './state'
import { setupMonthEvents } from './events/monthEvents'

(() => {
    const state = new State({
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth(),
    })

    setupYearEvents(state)
    setupMonthEvents(state)
})()
