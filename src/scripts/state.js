export class State {
    constructor(options) {
        const { selectedYear, selectedMonth, selectedDay } = options

        this.selectedYear = selectedYear
        this.selectedMonth = selectedMonth
        this.selectedDay = selectedDay
    }

    set(key, value) {
        this[key] = value
    }

    get(key) {
        return this[key]
    }
}