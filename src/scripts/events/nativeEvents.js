export function setupNativeEvents(state) {
    const nativeDatePicker = document.querySelector('#native-date-picker')

    if (nativeDatePicker) {
        nativeDatePicker.addEventListener('change', ({ target }) => {
            const { value } = target

            if (value) {
                const [ yyyy, mm, dd ] = value.split('-')

                selectYear(yyyy)
                selectMonth(mm)
                selectDay(dd)
            }
        })
    }

    function selectYear(year) {
        state.set('selectedYear', year)

        const yearSpan = document.getElementById('YYYY')

        if (yearSpan) {
            yearSpan.innerText = year

            const fullDate = document.getElementById('full-date')

            if (fullDate) {
                if (fullDate) {
                    fullDate.style.color = '#FF8749'

                    setTimeout(() => {
                        fullDate.style.color = 'white'
                    }, 200)
                }
            }
        }
    }

    function selectMonth(month) {
        state.set('selectedMonth', month)

        const monthSpan = document.getElementById('mm')

        if (monthSpan) {
            monthSpan.innerText = String(month).padStart(2, '0')

            const fullDate = document.getElementById('full-date')

            if (fullDate) {
                fullDate.style.color = '#FF8749'

                setTimeout(() => {
                    fullDate.style.color = 'white'
                }, 200)
            }
        }
    }

    function selectDay(day) {
        state.set('selectedDay', day)
        const daySpan = document.getElementById('dd')

        if (daySpan) {
            daySpan.innerText = String(day).padStart(2, '0')

            const fullDate = document.getElementById('full-date')

            if (fullDate) {
                fullDate.style.color = '#FF8749'

                setTimeout(() => {
                    fullDate.style.color = 'white'
                }, 200)
            }
        }
    }
}