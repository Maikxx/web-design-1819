export class State {
    constructor(options) {
        const { selectedYear, selectedMonth } = options

        this.selectedYear = selectedYear
        this.selectedMonth = selectedMonth
    }

    set(key, value) {
        this[key] = value
    }

    get(key) {
        return this[key]
    }
}