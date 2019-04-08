createYearButtons()

const previousButton = document.getElementById('previous-set')
const nextButton = document.getElementById('next-set')
const buttonContainer = document.querySelector('.ButtonContainer')

previousButton.addEventListener('click', changeSubsetYears('back'))
nextButton.addEventListener('click', changeSubsetYears('forwards'))

function createYearButtons(fromYear) {
    const currentYear = fromYear || new Date().getFullYear()
    const years = [currentYear - 1, currentYear, currentYear + 1]
    const buttonContainer = document.querySelector('.ButtonContainer')

    years.forEach(year => {
        const buttonBlock = document.createElement('a')

        buttonBlock.classList.add('ButtonBlock')
        buttonBlock.classList.add('focussable')
        buttonBlock.setAttribute('href', '#')
        buttonBlock.innerText = year

        buttonContainer.appendChild(buttonBlock)
    })
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
    }
}