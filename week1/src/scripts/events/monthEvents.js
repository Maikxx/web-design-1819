export function setupMonthEvents(state) {
    const monthContainer = document.querySelector('.ButtonContainer--month')

    if (monthContainer) {
        const monthButtons = monthContainer.querySelectorAll('.ButtonBlock')

        if (monthButtons && monthButtons.length > 0) {
            monthButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const monthNumber = Number(button.getAttribute('data-value'))

                    if (typeof monthNumber !== 'number') {
                        throw new Error('The button clicked does not have a month number...')
                    }

                    state.set('selectedMonth', monthNumber)
                })
            })
        }
    }
}