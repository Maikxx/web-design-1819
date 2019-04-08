const previousYearButton = document.getElementById('previous-year-set')
const nextYearButton = document.getElementById('next-year-set')
const buttonContainer = document.querySelector('.ButtonContainer--year')

previousYearButton.addEventListener('click', changeSubsetYears('back'))
nextYearButton.addEventListener('click', changeSubsetYears('forwards'))

function createYearButtons(fromYear) {
    const currentYear = fromYear || new Date().getFullYear()
    const years = [currentYear - 1, currentYear, currentYear + 1]
    changeNavigationButtons(currentYear)

    years.forEach(createYearButton)
}

function createYearButton(year) {
    const buttonBlock = document.createElement('a')

    buttonBlock.classList.add('ButtonBlock')
    buttonBlock.setAttribute('href', '#month')
    buttonBlock.innerText = year

    buttonContainer.appendChild(buttonBlock)
}

function changeSubsetYears(direction) {
    return function() {
        const buttonBlocks = buttonContainer.querySelectorAll('.ButtonBlock')
        let nextSubsetYear

        if (direction === 'forwards') {
            const lastButtonBlockYear = Number(buttonBlocks[buttonBlocks.length - 1].innerText)
            nextSubsetYear = lastButtonBlockYear + 2
        } else {
            const firstButtonBlockYear = Number(buttonBlocks[0].innerText)
            nextSubsetYear = firstButtonBlockYear - 2
        }

        buttonContainer.innerHTML = ''
        createYearButtons(nextSubsetYear)
        changeNavigationButtons(nextSubsetYear)
    }
}

function changeNavigationButtons(year) {
    previousYearButton.innerText = `${year - 4} - ${year - 2}`
    nextYearButton.innerText = `${year + 2} - ${year + 4}`
}

module.exports = {
    createYearButtons,
}