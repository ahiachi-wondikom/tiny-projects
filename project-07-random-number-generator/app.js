const minInput = document.getElementById('min-input') // ? Select min input
const maxInput = document.getElementById('max-input') // ? Select max input
const generateBtn = document.getElementById('generate-btn') // ? Select generate button
const resultNumber = document.getElementById('result-number') // ? Select result display element

generateBtn.addEventListener('click', () => {
	// Get values from inputs
	const min = Number(minInput.value)
	const max = Number(maxInput.value)

	// Validate inputs
	if (!minInput.value || !maxInput.value || isNaN(min) || isNaN(max)) {
		alert('Please enter valid numbers!')
		return
	}

	if (min >= max) {
		alert('Minimum must be less than maximum!')
		return
	}

	const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

	resultNumber.textContent = randomNum
})
