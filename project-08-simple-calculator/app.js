// Think: "I need to grab these elements so I can use them later"
const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const resultDisplay = document.getElementById('result')

const addBtn = document.getElementById('btn-add')
const subtractBtn = document.getElementById('btn-subtract')
const multiplyBtn = document.getElementById('btn-multiply')
const divideBtn = document.getElementById('btn-divide')

function calculate(operation) {
	const number1 = Number(num1Input.value)
	const number2 = Number(num2Input.value)

	if (!isNaN(number1) || !isNaN(number2)) {
		resultDisplay.textContent = 'Please enter a valid number'
		return
	}

	let result

	if (operation === 'add') {
		result = number1 + number2
	} else if (operation === 'subtract') {
		result = number1 - number2
	} else if (operation === 'multiply') {
		result = number1 * number2
	} else if (operation === 'divide') {
		if (number2 === '0') {
			result.textContent = 'cannot divide by zero'
			return
		}
		result = number1 / number2
	}

	resultDisplay.textContent = `Result: ${result}`
}

addBtn.addEventListener('click', function () {
	calculate('add')
})

subtractBtn.addEventListener('click', function () {
	calculate('subtract')
})

multiplyBtn.addEventListener('click', function () {
	calculate('multiply')
})

divideBtn.addEventListener('click', function () {
	calculate('divide')
})
